import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer__section">
                    <h2>
                        <a className="footer__title footer__link" href="http://www.istu.edu/" target="_blank" rel="noreferrer">
                            «Иркутский национальный исследовательский технический университет»
                        </a>
                    </h2>
                    <p className="footer__subtitle">Федеральное государственное бюджетное образовательное учреждение высшего образования</p>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Контакты</h3>
                    <p>
                        <div className="footer__title footer__title--s">Адрес</div>
                        <a className="footer__link" href="https://goo.gl/maps/H77TXG8xSLwKsV4aA" target="_blank" rel="noreferrer">664074, Иркутск, Лермонтова, 83</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">E-mail</div>
                        <a className="footer__link" href="mailto:info@istu.edu">info@istu.edu</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">Справочная</div>
                        <a className="footer__link" href="tel:+73952405009">+7 (3952) 405-009</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">Телефон</div>
                        <a className="footer__link" href="tel:+73952405000">+7 (3952) 405-000</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">Факс</div>
                        <a className="footer__link" href="tel:+73952405100">+7 (3952) 405-100</a>
                    </p>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Приёмная <br />комиссия</h3>
                    <p>
                        <div className="footer__title footer__title--s">E-mail</div>
                        <a className="footer__link" href="mailto:cpk@istu.edu">cpk@istu.edu</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">Телефон</div>
                        <a className="footer__link" href="tel:+73952405405">+7 (3952) 405 405</a>
                    </p>
                    <p>
                        <div className="footer__title footer__title--s">Горячая линия</div>
                        <a className="footer__link" href="tel:88001005405">8 800 100 54 05</a>
                    </p>
                    <p className="footer__ending">
                        <div className="footer__title">Минобрнауки России</div>
                        <a className="footer__link" href="https://www.minobrnauki.gov.ru/" target="_blank" rel="noreferrer">www.minobrnauki.gov.ru</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer