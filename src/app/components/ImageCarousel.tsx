// components/ImageCarousel.tsx
"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type CarouselProps = {
    images: { src: string; alt: string }[]
}

export default function ImageCarousel({ images }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const autoplayTimer = useRef<NodeJS.Timeout | null>(null)

    // Track the current active slide index for the dots
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    // Navigate directly to a slide when clicking a dot
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    // Sync state with Embla's active index
    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect() // Set initial state
        emblaApi.on('select', onSelect) // Update on change

        const startAutoplay = () => {
            autoplayTimer.current = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext()
                } else {
                    stopAutoplay()
                }
            }, 3000)
        }

        const stopAutoplay = () => {
            if (autoplayTimer.current) {
                clearInterval(autoplayTimer.current)
                autoplayTimer.current = null
            }
        }

        startAutoplay()

        // Stop autoplay on manual interaction (click, swipe, or dot selection)
        emblaApi.on('pointerDown', stopAutoplay)

        return () => {
            stopAutoplay()
            emblaApi.off('select', onSelect)
            emblaApi.off('pointerDown', stopAutoplay)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="position-relative w-100 mx-auto overflow-hidden bg-dark rounded-4 shadow" style={{ maxWidth: '800px' }}>
            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="d-flex">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="position-relative min-w-0 w-100 flex-shrink-0 flex-grow-0"
                            style={{ flex: '0 0 100%', aspectRatio: '9/12' }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                priority={index === 0}
                                sizes="(max-w-800px) 100vw, 800px"
                                className="object-fit-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrow Navigation */}
            {/*
            <button
                onClick={scrollPrev}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', opacity: 0.8 }}
                aria-label="Previous slide"
            >
                ‹
            </button>
            <button
                onClick={scrollNext}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', opacity: 0.8 }}
                aria-label="Next slide"
            >
                ›
            </button>
            */}

            {/* Bootstrap Carousel Indicators (Dots) */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex mb-3 gap-2" style={{ zIndex: 2 }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        // Combines standard Bootstrap utility styles for indicator layout
                        className={`border-0 rounded-circle p-0 transition-all ${index === selectedIndex ? 'bg-white' : 'bg-white-50'
                            }`}
                        style={{
                            width: '12px',
                            height: '12px',
                            opacity: index === selectedIndex ? 1 : 0.5,
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
