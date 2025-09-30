import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-neutral-900 text-neutral-300 text-sm">
                <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                    <p>Copyright © 2025 <span className="text-rose-300">Jensi</span></p>
                    <a href="#home" className="text-neutral-400 hover:text-white">BACK TO TOP</a>
                </div>
            </footer>
        </div>
    )
}