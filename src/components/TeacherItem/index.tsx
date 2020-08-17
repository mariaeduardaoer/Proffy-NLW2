import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.ffor8-2.fna.fbcdn.net/v/t1.0-0/p370x247/73515580_10162756184025077_6438242674913837056_n.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_ohc=6simVEdoUAwAX-_5YHs&_nc_ht=scontent.ffor8-2.fna&_nc_tp=6&oh=3fd981e3c7a7c25154e9a52642deb003&oe=5F5FAD63" alt="Bob Esponja" />
                <div>
                    <strong>Bob Esponja</strong>
                    <span>Hamburguer de Siri</span>
                </div>
            </header>

            <p>
                Sempre estou pronto para fazer o melhor Hamburguer de Siri.
        <br /> <br />
        Sou um dos únicos que sabe a Receita Secreta. Amo caçar águas vivas com o Patrick, ele e o Lula-Molusco são meus melhores amigos. Tenho um caracol de estimação chamado Gary :).
        </p>


            <footer>
                <p>
                    Preço/hora
                       <strong>R$ 1,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
                </button>
            </footer>
        </article>
    );

}

export default TeacherItem;