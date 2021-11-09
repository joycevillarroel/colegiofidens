import React from 'react';
import style from './style.module.css';

const Contact = () => (
    <div id="contact" className={style.containerFluid}>
        <div className={style.container}>
            <div className={style.info}>
                <h4>Contato</h4>
                <p>Telefones:</p>
                <p>(11) 4667-3335</p>
                <p>(11) 4165-1988</p>
                <p>E-mail: fidenssecretaria@hotmail.com</p>
            </div>
            <div className={style.info}>
            <h4>Endereço</h4>

                <p>Rua Luar do Sertão, 1713<br />Chácara Santa Maria<br /> Itapecerica da Serra - SP<br />CEP: 05879-450</p>
            </div>
            <div className={style.map}>
                <iframe 
                    className={style.homeMap} 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14614.30595564444!2d-46.800330190490726!3d-23.691098805475566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bdcbad1195a976b!2sCol%C3%A9gio%20Fidens!5e0!3m2!1spt-BR!2sbr!4v1606836366473!5m2!1spt-BR!2sbr" 
                    frameBorder="0">
                </iframe>
            </div>
        </div>
            <div id="footer">
                <p className={style.footer}>
                    © 2021 Instituto Educacional Fidens. Todos os direitos reservados.
                </p>
            </div>
    </div>
);

export default Contact;