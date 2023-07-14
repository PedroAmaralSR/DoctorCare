import { Container, Button } from "./styles";
import {FaWhatsapp, FaFacebookF} from 'react-icons/fa'
import {LuMapPin} from 'react-icons/lu'
import {AiOutlineCheckCircle, AiOutlineInstagram, AiOutlineYoutube, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../../assets/logo.svg'
import Logo2 from '../../assets/logo2.svg'
import LogoFooter from '../../assets/logoFooter.svg'
import woman from '../../assets/woman.png'
import doctorAndPatients from '../../assets/doctorAndPatients.png'
import manWithACellPhone from '../../assets/manWithACellPhone.png'
import {useRef, useEffect, useState} from 'react'



export function Header(){
  const [scroll, setScroll] = useState(false)
 

  
  const divMenuExpandedOpenClose = useRef(null)
  const divMenuClose = useRef(null)


  const handleClickClose = () => {
    divMenuClose.current.classList.remove('close')
    divMenuExpandedOpenClose.current.classList.remove('open')
  }
  const handleClickOpen = () => {
    divMenuClose.current.classList.add('close')
    divMenuExpandedOpenClose.current.classList.add('open')
  }

  useEffect(function(){
    function scrolll() {
      if(window.scrollY > 0){
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', scrolll)
  }, [])

  return(
  <Container>
    
    <header  className={scroll ? 'menuDesktopScroll menuDesktop' : 'menuDesktop'}>
      <div>
        <a href="#" className="logo"><img src={Logo} alt="logo" /></a>
        <a href="#" className="logo2"><img src={Logo2} alt="logo" /></a>

        <nav>
          <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        <button>AGENDAR CONSULTA</button>
      </div>
    </header>

    <header  className={scroll ? 'menuMobileScroll menuMobile' : 'menuMobile'}>


      <div ref={divMenuClose} className="menu">
        <a href="#" className="logo"><img src={Logo} alt="logo" /></a>
        <a href="#" className="logo2"><img src={Logo2} alt="logo" /></a>
        <button onClick={handleClickOpen}  aria-expanded="true"><AiOutlineMenu size={40}/></button>
      </div>
      <div  ref={divMenuExpandedOpenClose} className="menuExpanded">
        <div>
          <div className="logo-button">
            <a href="#" className="logo2"><img src={Logo2} alt="logo" /></a>
            <button onClick={handleClickClose} aria-expanded="false"><AiOutlineClose size={40}/></button>
          </div>
          <nav>
            <ul>
              <li><a onClick={handleClickClose} href="#home">Início</a></li>
              <li><a onClick={handleClickClose} href="#services">Serviços</a></li>
              <li><a onClick={handleClickClose} href="#about">Sobre</a></li>
              <li><a onClick={handleClickClose} href="#contact">Contato</a></li>
              <button>AGENDAR CONSULTA</button>
            </ul>
          </nav>
          

          <div className="network">
            <a href="#"><AiOutlineInstagram color="white" size={24}/></a>
            <a href="#"><FaFacebookF color="white" size={24}/></a>
            <a href="#"><AiOutlineYoutube color="white" size={24}/></a>
          </div>
          
        </div>
        
      </div>
      
    </header>

    <main id="home">
      <div>
        <span>BOAS-VINDAS A DOCTORCARE 👋</span>

        <h1>Assistência médica simplificada para todos</h1>

        <p>
        Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>

        <Button > <FaWhatsapp size={20}/> Agende sua consulta</Button>

      </div>

      <img  src={woman} alt="mulher com blusa verde apoiando as mãos no coração" />
    </main>

    <section className="numbers">
      <div>
        <span>+3.500</span>
        <p>Pacientes atendidos</p>
      </div>
      <div>
        <span>+15</span>
        <p>Especialistas disponíveis</p>
      </div>
      <div>
        <span>+10</span>
        <p>Anos no mercado</p>
      </div>
    </section>

    <section id="services" className="services">
      <p>SERVIÇOS</p>
      <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
      <div>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Problemas digestivos</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Saúde Hormonal</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Bem-estar mental</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Cuidados Pediátricos</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Autoimune e Inflamação</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        <aside>
          <AiOutlineCheckCircle color="green" size={24}/>
        <h3>Saúde do Coração</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
        </p>
        </aside>
        
      </div>
    </section>

    <section id="about" className="about">

      <img  src={doctorAndPatients} alt="Um feliz médico segurando uma prancheta com pacientes" />

      <aside>

        <span>SOBRE NÓS</span>

        <h3>Entenda quem somos e por que existimos</h3>

        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
        </aside>

    </section>

    <section id="contact" className="contact">

      <aside>

        <h3>Entre em contato com a gente!</h3>

        <p> <LuMapPin color="#00856F" size={24}/> R. Amauri Souza, 346</p>
        <p> <HiOutlineMail color="#00856F" size={24}/> contato@beautysalon.com</p>

        <Button > <FaWhatsapp size={20}/> Agende sua consulta</Button>
      </aside>

      <img src={manWithACellPhone} alt="homem com um celular" />

    </section>

    <footer>
      <aside>
        <div className="footerInformation">
        <img src={LogoFooter} alt="logo" />
        <p>©2023 - DoctorCare.</p>
        <p>Todos os direitos reservados.</p>
        </div>
      
        <div className="network">
          <a href="#"><AiOutlineInstagram color="white" size={24}/></a>
          <a href="#"><FaFacebookF color="white" size={24}/></a>
          <a href="#"><AiOutlineYoutube color="white" size={24}/></a>
        </div>
      </aside>


    </footer>
  </Container>
  )
}