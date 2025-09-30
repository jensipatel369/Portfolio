import React from 'react'

export default function Skill() {
    return (
        <div>
            <section id="skills" className="py-20 bg-gray-50">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">My skills</h2>
                    <div className="mx-auto mt-3 h-2 w-8 rounded-full bg-pink-200" />
                    <div className="mt-10 flex justify-center gap-8">
                        {['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React JS', 'Material UI'].map(label => (
                            <div key={label} className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#ec88ac] cursor-pointer transition-colors duration-300 text-white flex items-center justify-center text-sm md:text-base shadow-sm">
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
