import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Terms() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
            <Header />
            <div className="flex flex-col my-4 flex-grow bg-gray-100 py-12 px-6 rounded-lg shadow-lg max-w-6xl mx-auto">
                <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-8">
                    Terms and Conditions
                </h1>
                <div className="grid gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700">1. Acceptance of Terms</h2>
                        <p className="text-gray-700 mt-2">
                            By using Vasista’s website, products, or services, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700">2. User Responsibilities</h2>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            <li>You must be 18 years or older to use our services.</li>
                            <li>You agree not to engage in illegal activities while using Vasista’s services.</li>
                            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700">3. Intellectual Property</h2>
                        <p className="text-gray-700 mt-2">
                            All content, logos, and trademarks displayed on Vasista’s website are the property of Vasista. Unauthorized reproduction or distribution of Vasista’s intellectual property is strictly prohibited.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700">4. Limitation of Liability</h2>
                        <p className="text-gray-700 mt-2">
                            Vasista is not responsible for any losses, damages, or service interruptions caused by third parties or unforeseen circumstances. Our liability, in any case, shall not exceed the amount paid by you for our services.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700">5. Privacy Policy</h2>
                        <p className="text-gray-700 mt-2">
                            We collect and store user data as outlined in our Privacy Policy. We do not sell or share personal information with third parties without user consent.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
