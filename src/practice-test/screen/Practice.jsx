import React from 'react'
import "/src/styles.css";
import SlotUpload from '../component/SlotUpload';
import ButtonCustom from '../component/ButtonCustom';
import QuestionList from '../component/QuestionList';

// let id = 0;
// const initialQuestions = [
//   { id: id++, option: "Practice Test", nameIcon: "crown", navigate: "/" },
//   { id: id++, option: "History Test", nameIcon: "folder", navigate: "/history-test"  },
//   { id: id++, option: "About Us", nameIcon: "pin", navigate: "/about-us"  },
//   { id: id++, option: "Contact Us", nameIcon: "conversation", navigate: "/contact-us"  },
// ];

const Practice = () => {
  return (
    <section className="practice">
      <div className="content">
        <h1 className="header-text">Upload Your PDF</h1>
        <div className="core-content">
          <SlotUpload />
          <ButtonCustom name="Generate" />
          <QuestionList />
          {/* <div className="content-question">
            For Question <br />
            Teknologi telah menjadi bagian tak terpisahkan dari kehidupan manusia di era modern ini. Kemajuan teknologi memengaruhi hampir semua aspek kehidupan, mulai dari komunikasi, pendidikan, pekerjaan, hingga hiburan. Keberadaan teknologi memberikan dampak positif yang luar biasa, namun juga membawa tantangan yang perlu dihadapi dengan bijak.

            Salah satu dampak terbesar dari teknologi adalah kemudahan dalam berkomunikasi. Dahulu, komunikasi jarak jauh membutuhkan waktu yang lama, misalnya melalui surat atau telegram. Namun, dengan adanya teknologi seperti telepon pintar, internet, dan media sosial, komunikasi menjadi lebih cepat dan efisien. Orang-orang dapat berbicara, mengirim pesan, bahkan melakukan panggilan video secara real-time meskipun berada di belahan dunia yang berbeda. Hal ini tidak hanya meningkatkan hubungan personal, tetapi juga mendukung kerja sama lintas negara dalam dunia bisnis dan pendidikan.

            Dalam bidang pendidikan, teknologi telah merevolusi cara belajar. Platform e-learning, video pembelajaran, dan aplikasi edukasi telah memungkinkan siswa untuk belajar kapan saja dan di mana saja. Guru juga dapat memanfaatkan berbagai sumber daya digital untuk meningkatkan kualitas pengajaran mereka. Namun, kemajuan ini juga menimbulkan kesenjangan teknologi, di mana tidak semua siswa memiliki akses yang sama terhadap perangkat dan internet, terutama di daerah terpencil.

            Di dunia kerja, teknologi membantu meningkatkan produktivitas. Automasi dan kecerdasan buatan telah menggantikan beberapa pekerjaan manual, memungkinkan pekerja untuk fokus pada tugas yang lebih strategis dan kreatif. Meski begitu, transformasi ini juga memunculkan tantangan baru, seperti kebutuhan untuk meningkatkan keterampilan agar tetap relevan di pasar kerja. Banyak pekerjaan tradisional yang tergantikan oleh mesin, sehingga penting bagi individu untuk terus belajar dan beradaptasi dengan perubahan zaman.

            Selain itu, teknologi juga membawa dampak signifikan pada gaya hidup manusia. Layanan streaming, aplikasi musik, dan game online telah mengubah cara orang mengonsumsi hiburan. Aktivitas belanja juga menjadi lebih praktis dengan hadirnya e-commerce, di mana konsumen dapat membeli berbagai barang tanpa harus keluar rumah. Namun, kemudahan ini juga membawa risiko, seperti ketergantungan pada teknologi, kurangnya aktivitas fisik, dan ancaman keamanan data pribadi.

            Di sisi lain, teknologi juga memiliki dampak negatif yang tidak boleh diabaikan. Salah satu masalah terbesar adalah meningkatnya ketergantungan pada teknologi, yang dapat menyebabkan gangguan kesehatan mental seperti kecemasan dan stres. Media sosial, misalnya, seringkali menciptakan tekanan sosial dan membandingkan diri dengan orang lain. Selain itu, isu privasi dan keamanan data juga menjadi perhatian utama. Dengan semakin banyaknya informasi pribadi yang tersimpan secara digital, ancaman terhadap pencurian data dan penyalahgunaan informasi semakin meningkat.

            Sebagai kesimpulan, teknologi adalah pedang bermata dua. Di satu sisi, ia membawa kemudahan, efisiensi, dan peluang baru. Namun, di sisi lain, ia juga menghadirkan tantangan yang perlu diatasi. Oleh karena itu, penting bagi kita untuk menggunakan teknologi secara bijak dan bertanggung jawab, agar dampaknya dapat dimaksimalkan untuk kebaikan bersama. Dengan pendekatan yang tepat, teknologi dapat menjadi alat yang memperbaiki kualitas hidup manusia tanpa mengorbankan nilai-nilai kemanusiaan.
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Practice