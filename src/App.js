import React from 'react';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { IoBookOutline } from 'react-icons/io5';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const App = () => {
  const responsive = {
    allSizes: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="flex gap-1 justify-center items-center text-xl font-semibold">
            <div><IoBookOutline /></div>
            <div>eCourse</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
              <Nav.Link href="#features" className='text-white'>Tentang Kami</Nav.Link>
              <Nav.Link href="#features" className='text-white'>Guru</Nav.Link>
              <Nav.Link href="#pricing" className='text-white'>Testimoni</Nav.Link>
              <Nav.Link href="#Kontak" className='text-white'>Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="w-full h-screen flex items-center text-center p-10 lg:p-20 text-white"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold mb-6 lg:text-5xl">Welcome to eCourse</h1>
          <p className="text-md lg:text-lg mb-8">
            Tempat belajar berbagai bahasa baik online atau offline dengan guru luar
            negeri maupun dalam negeri yang sudah bersertifikat internasional
          </p>
          <Button variant="primary" size="lg" className="px-4 py-2">
            Get Started
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-10 flex flex-col items-center bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Tentang Kami</h2>
        <p className="text-lg mb-12 text-center lg:w-7/12">
          Kami adalah platform kursus bahasa yang berdedikasi untuk membantu Anda menguasai berbagai bahasa asing dengan mudah dan efektif. Dengan pengajar berpengalaman dari dalam dan luar negeri, serta materi yang dirancang khusus untuk setiap level, kami memastikan bahwa Anda dapat belajar sesuai dengan kebutuhan dan kecepatan Anda.
        </p>
      </div>

      {/* Mengapa Memilih Kami */}
      <Container className='py-20'>
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Mengapa Memilih Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-3 flex flex-col items-center justify-center">
            <p className='bg-black text-white font-bold text-2xl p-1 w-10 rounded-full'>1</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pengajar Berkualitas</h3>
            <p className="text-gray-600">
              Semua pengajar kami memiliki sertifikasi internasional dan pengalaman mengajar yang luas, memastikan Anda mendapatkan pendidikan bahasa berkualitas tinggi.
            </p>
          </div>
          <div className="text-center p-3 flex flex-col items-center justify-center">
            <p className='bg-black text-white font-bold text-2xl p-1 w-10 rounded-full'>2</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Metode Pembelajaran Fleksibel</h3>
            <p className="text-gray-600">
              Kami menawarkan kelas online dan offline yang dapat disesuaikan dengan jadwal Anda, memberikan fleksibilitas maksimal untuk belajar kapan saja dan di mana saja.
            </p>
          </div>
          <div className="text-center p-3 flex flex-col items-center justify-center">
            <p className='bg-black text-white font-bold text-2xl p-1 w-10 rounded-full'>3</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kurikulum Terstruktur</h3>
            <p className="text-gray-600">
              Kurikulum kami dirancang untuk membantu Anda mencapai kemampuan bahasa yang diinginkan dengan materi yang terorganisir, dari level pemula hingga mahir.
            </p>
          </div>
        </div>
      </Container>

      {/* Guru */}
      <Container className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Guru</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="flex justify-around">
          <Card className="mx-auto w-6/12 p-3">
            <Card.Body>
              <div className='flex items-center justify-center'>
                  <img src='/Guru1.jpg' className='rounded'></img>
              </div>
              <Card.Title className='mt-3'>Sapti</Card.Title>
              <Card.Text className='mt-3'>
                Sapti adalah guru bahasa Inggris dengan pengalaman lebih dari 10 tahun mengajar di berbagai negara. Beliau memiliki sertifikasi TESOL dan dikenal karena pendekatannya yang personal dan metode pembelajaran yang inovatif. Sapti berkomitmen untuk membantu siswa meraih kemampuan bahasa yang diinginkan melalui teknik-teknik yang terbukti efektif.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto w-6/12 p-3">
            <Card.Body>
              <div className='flex items-center justify-center'>
                  <img src='/Guru2.jpg' className='w-full rounded'></img>
              </div>
              <Card.Title className='mt-3'>Alexander</Card.Title>
              <Card.Text className='mt-3'>
                Alexander adalah pengajar bahasa Spanyol dari Spanyol dengan latar belakang pendidikan di bidang Linguistik. Dengan pengalaman mengajar lebih dari 8 tahun, Alexander menggabungkan metode tradisional dan teknik modern untuk menciptakan lingkungan belajar yang menyenangkan dan efektif. Beliau juga fasih dalam beberapa bahasa, memberikan panduan yang kaya dan mendalam
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto w-6/12 p-3">
            <Card.Body>
              <div className='flex items-center justify-center'>
                  <img src='/Guru3.jpg' className='rounded'></img>
              </div>
              <Card.Title className='mt-3'>Richard</Card.Title>
              <Card.Text className='mt-3'>
                Richard adalah guru bahasa Prancis dengan pengalaman lebih dari 12 tahun di berbagai lembaga pendidikan. Dengan sertifikasi DELF dan pengalaman internasional, Richard menawarkan pendekatan yang dinamis dan mendalam untuk membantu siswa menguasai bahasa Prancis. Beliau dikenal karena cara mengajarnya yang kreatif dan motivasi yang tinggi.
              </Card.Text>
            </Card.Body>
          </Card>

        </Carousel>
      </Container>

      {/* Testimoni */}
      <Container className="py-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Testimoni</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="flex justify-between">
          <Card className="mx-auto w-7/12 p-3">
            <Card.Body>
              <div className='flex items-center gap-2'>
                <div>
                  <img src='/testimoni1.jpg' className='w-16 h-16 rounded-full'></img>
                </div>
                <div>
                  <h4>Hanan</h4>
                  <div className='flex'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                  </div>
                </div>
              </div>
              <Card.Text className='mt-3'>
                eCourse telah mengubah cara saya belajar bahasa. Metode pengajaran yang fleksibel dan pengajar yang berpengalaman membuat proses belajar menjadi menyenangkan dan efektif. Saya sangat merekomendasikan eCourse kepada siapa saja yang ingin mempelajari bahasa baru!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto w-7/12 p-3">
            <Card.Body>
              <div className='flex items-center gap-2'>
                <div>
                  <img src='/testimoni2.jpg' className='w-16 h-16 rounded-full'></img>
                </div>
                <div>
                  <h4>Fazle</h4>
                  <div className='flex'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <CiStar className='text-yellow-500' />
                  </div>
                </div>
              </div>
              <Card.Text className='mt-3'>
                eCourse menawarkan pengalaman belajar yang luar biasa dengan pengajar yang sangat kompeten. Fleksibilitas dalam jadwal kelas memungkinkan saya untuk belajar sesuai dengan ritme saya sendiri, dan hasilnya sangat memuaskan. Terima kasih, eCourse
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mx-auto w-7/12 p-3">
            <Card.Body>
              <div className='flex items-center gap-2'>
                <div>
                  <img src='/testimoni3.jpg' className='w-16 h-16 rounded-full'></img>
                </div>
                <div>
                  <h4>Michael</h4>
                  <div className='flex'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaRegStarHalfStroke className='text-yellow-500' />
                  </div>
                </div>
              </div>
              <Card.Text className='mt-3'>
                Saya sangat puas dengan kualitas kursus di eCourse. Pengajaran yang profesional dan materi yang terstruktur dengan baik membantu saya mencapai tujuan belajar bahasa saya lebih cepat dari yang saya kira. Dukungan dan bimbingan yang saya terima sangat berharga.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel>
      </Container>

      {/* Paket */}
      <Container className="py-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Paket Kursus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-3 lg:px-0">
          {/* Paket Online */}
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="text-2xl font-bold mb-2">Paket Online</Card.Title>
              <Card.Text className="text-lg mb-4">
                Ikuti kursus bahasa secara online dengan fleksibilitas waktu dan tempat. Paket ini mencakup akses penuh ke materi kursus dan sesi live dengan pengajar.
              </Card.Text>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Rp1.000.000</span>
                <span className="text-red-500 line-through">Rp1.200.000</span>
              </div>
              <div className="text-center">
              <Button variant="primary" className='py-2 px-3'>Daftar Sekarang</Button>
              </div>
            </Card.Body>
          </Card>
          
          {/* Paket Offline */}
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="text-2xl font-bold mb-2">Paket Offline</Card.Title>
              <Card.Text className="text-lg mb-4">
                Bergabunglah dengan kelas bahasa kami secara langsung di lokasi kami. Paket ini mencakup sesi tatap muka dengan pengajar serta materi kursus.
              </Card.Text>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Rp1.500.000</span>
                <span className="text-red-500 line-through">Rp1.650.000</span>
              </div>
              <div className="text-center">
                <Button variant="primary" className='py-2 px-3'>Daftar Sekarang</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      {/* Kontak dan Lokasi */}
      <div className='py-10 px-10 lg:px-20 bg-gray-900 text-white'>
        <h2 id="Kontak" className="text-3xl font-bol text-center mb-12">Kontak Kami</h2>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full'>
            <h3 className='text-xl font-semibold'>Informasi Kontak</h3>
            <p>Alamat: Jl. Mawar No. 15, Jakarta</p>
            <p>Email: <a href=''>ecourseindonesia@gmail.com</a></p>
            <p>Telepon: 
              <p className='mt-2 ml-3'><a href=''>(021) 123-4567</a></p>
              <p className='ml-3'><a href=''>+6282 8901 9013</a></p>
              <p className='ml-3'><a href=''>+6283 1546 6542</a></p>
            </p>
          </div>
          <div className='w-full'>
            <h3 className='text-xl font-semibold'>Lokasi Kami</h3>
            <div className='mt-3'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.49131702408!2d106.6647009199301!3d-6.229720927628746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1725873377040!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center pt-3 pb-1">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
