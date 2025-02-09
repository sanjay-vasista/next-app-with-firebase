import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="bg-purple-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6">Welcome to Vasista</h1>
          <p className="text-2xl mb-6 font-light">
            Empowering businesses with cutting-edge technology and digital innovation.
          </p>
          <p className="text-lg mb-8 text-gray-300">
            At Vasista, we specialize in advanced software solutions, cloud computing, AI-driven applications, and strategic IT consulting. Our team of experts works diligently to provide secure, scalable, and efficient digital solutions that help businesses thrive in the modern landscape. Whether you need digital transformation, seamless cloud migration, or a high-performance IT strategy, we are here to guide you every step of the way.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Software Development</h3>
              <p>Custom software solutions tailored to your business needs, ensuring high efficiency and performance.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p>Seamless cloud integration and migration services to enhance security, flexibility, and scalability.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">IT Consulting</h3>
              <p>Expert guidance on IT strategies, cybersecurity, and infrastructure optimization for your business growth.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Why Choose Vasista?</h2>
          <p className="text-lg mb-6 text-gray-300">Our innovative approach, experienced team, and customer-centric solutions set us apart from the competition.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-6 bg-purple-700 rounded-lg shadow-lg w-64">
              <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
              <p>Highly skilled professionals with deep industry expertise.</p>
            </div>
            <div className="p-6 bg-purple-700 rounded-lg shadow-lg w-64">
              <h3 className="text-2xl font-semibold mb-4">Customer Focused</h3>
              <p>Tailored solutions designed to meet your unique business needs.</p>
            </div>
            <div className="p-6 bg-purple-700 rounded-lg shadow-lg w-64">
              <h3 className="text-2xl font-semibold mb-4">Innovative Solutions</h3>
              <p>Utilizing the latest technology to drive business growth.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}