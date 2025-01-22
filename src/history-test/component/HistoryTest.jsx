import React from 'react'
import { useNavigate } from "react-router-dom";

const History = () => {
    const navigate = useNavigate();

    return (
        <button className='box-history' onClick={() => navigate("/history-test/review-history")}>
            <div className="more-action">
                <div className="box-logo">
                    <img src="/src/assets/logo.png" alt="logo" />
                </div>
                <p>
                    Review Test
                    <span>
                        <i className="bx bx-chevron-right icon"></i>
                    </span>
                </p>
            </div>
            <div className="history-section">
                <div className="description">
                    <div className="title-history">
                        <p>
                            Teknologi telah menjadi bagian tak terpisahkan dari kehidupan manusia di era modern ini. Kemajuan teknologi memengaruhi hampir semua aspek kehidupan, mulai dari komunikasi, pendidikan, pekerjaan, hingga hiburan. Keberadaan teknologi memberikan dampak positif yang luar biasa, namun juga membawa tantangan yang perlu dihadapi dengan bijak.

            Salah satu dampak terbesar dari teknologi adalah kemudahan dalam berkomunikasi. Dahulu, komunikasi jarak jauh membutuhkan waktu yang lama, misalnya melalui surat atau telegram. Namun, dengan adanya teknologi seperti telepon pintar, internet, dan media sosial, komunikasi menjadi lebih cepat dan efisien. Orang-orang dapat berbicara, mengirim pesan, bahkan melakukan panggilan video secara real-time meskipun berada di belahan dunia yang berbeda. Hal ini tidak hanya meningkatkan hubungan personal, tetapi juga mendukung kerja sama lintas negara dalam dunia bisnis dan pendidikan.

            Dalam bidang pendidikan, teknologi telah merevolusi cara belajar. Platform e-learning, video pembelajaran, dan aplikasi edukasi telah memungkinkan siswa untuk belajar kapan saja dan di mana saja. Guru juga dapat memanfaatkan berbagai sumber daya digital untuk meningkatkan kualitas pengajaran mereka. Namun, kemajuan ini juga menimbulkan kesenjangan teknologi, di mana tidak semua siswa memiliki akses yang sama terhadap perangkat dan internet, terutama di daerah terpencil.

            Di dunia kerja, teknologi membantu meningkatkan produktivitas. Automasi dan kecerdasan buatan telah menggantikan beberapa pekerjaan manual, memungkinkan pekerja untuk fokus pada tugas yang lebih strategis dan kreatif. Meski begitu, transformasi ini juga memunculkan tantangan baru, seperti kebutuhan untuk meningkatkan keterampilan agar tetap relevan di pasar kerja. Banyak pekerjaan tradisional yang tergantikan oleh mesin, sehingga penting bagi individu untuk terus belajar dan beradaptasi dengan perubahan zaman.

            Selain itu, teknologi juga membawa dampak signifikan pada gaya hidup manusia. Layanan streaming, aplikasi musik, dan game online telah mengubah cara orang mengonsumsi hiburan. Aktivitas belanja juga menjadi lebih praktis dengan hadirnya e-commerce, di mana konsumen dapat membeli berbagai barang tanpa harus keluar rumah. Namun, kemudahan ini juga membawa risiko, seperti ketergantungan pada teknologi, kurangnya aktivitas fisik, dan ancaman keamanan data pribadi.

            Di sisi lain, teknologi juga memiliki dampak negatif yang tidak boleh diabaikan. Salah satu masalah terbesar adalah meningkatnya ketergantungan pada teknologi, yang dapat menyebabkan gangguan kesehatan mental seperti kecemasan dan stres. Media sosial, misalnya, seringkali menciptakan tekanan sosial dan membandingkan diri dengan orang lain. Selain itu, isu privasi dan keamanan data juga menjadi perhatian utama. Dengan semakin banyaknya informasi pribadi yang tersimpan secara digital, ancaman terhadap pencurian data dan penyalahgunaan informasi semakin meningkat.

            Sebagai kesimpulan
                        </p>
                    </div>
                    <div className="date">
                        <p>
                            12/12/2021
                        </p>
                    </div>
                </div>
                <div className="score">
                    <div className="box-score">
                        <p>
                            5/10
                        </p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default History