import { Link } from '@inertiajs/react'
import RegisterButton from '@/components/Buttons/RegisterButton';

export default function Discover() {
    return (
        <section className="flex items-center justify-center min-h-[50vh] bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="grid [grid-template-columns:30%_70%] items-center max-w-[95%] mx-auto ml-24">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Descoperă oameni cu care să te miști, să te distrezi și să creezi amintiri
                    </h1>
                    <p className="mb-8 text-lg md:text-xl">
                        Evenimente locale sportive, pentru toate gusturile
                    </p>
                    <div className="flex gap-4">
                        <Link href="/events" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 w-44 h-12 text-base">
                            Vezi evenimente
                        </Link>
                        <RegisterButton className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 w-44 h-12 text-base" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="/home_image.svg" className="w-[60%] md:w-[65%]" alt="Home" />
                </div>
            </div>
        </section>
    )
}
