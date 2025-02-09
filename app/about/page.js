import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto my-4 bg-gray-100 py-12 px-6 rounded-lg shadow-lg">
                <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-8">
                    About Vasista
                </h1>
                <p className="text-center text-gray-800 text-lg mb-10">
                    Vasista is a forward-thinking technology company specializing in software development, 
                    cloud computing, AI solutions, and digital transformation. Our goal is to drive innovation, 
                    efficiency, and scalability for businesses across industries.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="container shadow-xl shadow-purple-300 p-4">
                        <h2 className="text-2xl font-bold text-purple-700">Who We Are</h2>
                        <p className="text-gray-700 mt-2">
                            At Vasista, we bring together expertise in AI, cybersecurity, and IT consulting 
                            to deliver custom solutions tailored to businesses of all sizes.
                        </p>
                    </div>
                    <div className="container shadow-xl shadow-purple-300 p-4">
                        <h2 className="text-2xl font-bold text-purple-700">Our Vision</h2>
                        <p className="text-gray-700 mt-2">
                            To be a global leader in cutting-edge technology solutions, fostering digital transformation 
                            and technological advancements worldwide.
                        </p>
                    </div>
                    <div className="container shadow-xl shadow-purple-300 p-4">
                        <h2 className="text-2xl font-bold text-purple-700">Why Choose Us?</h2>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>Highly skilled and experienced technology professionals.</li>
                            <li>Customized, scalable, and efficient solutions.</li>
                            <li>Round-the-clock support and state-of-the-art innovations.</li>
                        </ul>
                    </div>
                    <div className="container shadow-xl shadow-purple-300 p-4">
                        <h2 className="text-2xl font-bold text-purple-700">Our Values</h2>
                        <p className="text-gray-700 mt-2">
                            🚀 Innovation | 💡 Integrity | 📈 Growth | 🤝 Customer-Centric | 🌍 Sustainability
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
