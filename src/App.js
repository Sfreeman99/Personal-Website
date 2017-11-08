import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function NavBar() {}
const NavBar = () => (
    <div>
        <p>Hello</p>
    </div>
);

const Row = props => (
    <div id={props.id} className={'row ' + props.className}>
        {props.children}
    </div>
);

const example = (
    <Row className="my-custom-class" id={1}>
        <p> Hello World </p>
    </Row>
);

const Counter = props => (
    <div>
        <button onClick={() => props.onPlus()}>+</button>
        <h3>{props.count}</h3>
        <button onClick={() => props.onMinus()}>-</button>
    </div>
);

const counterExample = (
    <Counter
        count={3}
        onPlus={() => console.log('adding!')}
        onMinus={() => console.log('subtracting!!!')}
    />
);
const HeaderBootStrap3 = () => (
    // <!-- Bootstrap 3 NavBar -->
    <div className="container">
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a
                        className="navbar-brand"
                        href="https://docs.google.com/a/basecampcodingacademy.org/document/d/1_h_e7eS3UIjBmZ0pV1QCCs1349uV3nOvnCT-L-5sKA0/edit?usp=sharing"
                        target="__blank"
                    >
                        Shedlia's Resume
                    </a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="index.html">About Me</a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Sfreeman99"
                            target="__blank"
                        >
                            <i
                                className="fa fa-github-alt"
                                aria-hidden="true"
                            />{' '}
                            Git Hub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/shedlia-freeman-265609149/"
                            target="__blank"
                        >
                            <i
                                className="fa fa-linkedin-square"
                                aria-hidden="true"
                            />{' '}
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    // <!-- BootStrap 3 NavBar end -->
);
const HeaderBootStrap4 = () => (
    <div className="container">
        <div className="jumbotron jumbotron-fluid" id="grad">
            <h1 className="display-5">Shedlia Freeman</h1>
            <p className="lead">Student at Base Camp Coding Academy.</p>
        </div>
        {/* <!-- Bootstrap 4 NavBar --> */}
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <a
                className="navbar-brand"
                href="https://docs.google.com/a/basecampcodingacademy.org/document/d/1_h_e7eS3UIjBmZ0pV1QCCs1349uV3nOvnCT-L-5sKA0/edit?usp=sharing"
                target="__blank"
            >
                Shedlia's Resume
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="index.html">
                        About Me
                        <span className="sr-only" />
                    </a>
                    <a
                        className="nav-item nav-link"
                        href="https://github.com/Sfreeman99"
                        target="__blank"
                    >
                        <i
                            className="fa fa-github-alt"
                            aria-hidden="true"
                        />{' '}
                        Git Hub
                    </a>
                    <a
                        className="nav-item nav-link"
                        href="https://www.linkedin.com/in/shedlia-freeman-265609149/"
                        target="__blank"
                    >
                        <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                        />{' '}
                        Linkedin
                    </a>
                </div>
            </div>
        </nav>
    </div>
);
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderBootStrap4 />
                {/* <!-- Bootstrap 4 NavBar End --> */}

                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-auto col-sm-auto">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3>About Me</h3>
                                </div>
                                <div className="panel-body">
                                    <p>
                                        My name is Shedlia Freeman. I have grown
                                        up in Water Valley, Ms for mostly all of
                                        my life. I am a current student at
                                        &nbsp;
                                        <a
                                            href="http://www.basecampcodingacademy.org"
                                            target="__blank"
                                        >
                                            Base Camp Coding Academy
                                        </a>. I plan to find an employer that
                                        fits me best.
                                    </p>
                                    <p id="p1">
                                        <i
                                            className="fa fa-envelope"
                                            aria-hidden="true"
                                        />&nbsp;&nbsp;sfreeman@basecampcodingacademy.org
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-auto col-sm-auto">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item active">
                                    <a data-toggle="pill" href="#home">
                                        Project Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        data-toggle="pill"
                                        className="nav-link"
                                        href="#menu1"
                                    >
                                        Hangman
                                        <i className="icon-python" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        data-toggle="pill"
                                        className="nav-link"
                                        href="#menu2"
                                    >
                                        Gladiators
                                        <i className="icon-python" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        data-toggle="pill"
                                        className="nav-link"
                                        href="#menu3"
                                    >
                                        Rental-Store
                                        <i className="icon-python" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        data-toggle="pill"
                                        className="nav-link"
                                        href="#menu4"
                                    >
                                        Gas Pump
                                        <i className="icon-python" />
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="pill" href="#menu5">
                                        Record Keeper
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Record Keeper
                                    </a>
                                    <div className="dropdown-menu">
                                        <a
                                            data-toggle="pill"
                                            className="dropdown-item"
                                            href="#menu5"
                                        >
                                            CommandLine&nbsp;
                                            <i className="icon-python" />
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a
                                            data-toggle="pill"
                                            className="dropdown-item"
                                            href="#menu6"
                                        >
                                            Flask&nbsp;
                                            <i className="icon-html5" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    id="home"
                                    className="tab-pane fade in active"
                                >
                                    <div className="portfolio-text">
                                        <h3>Projects</h3>
                                        <p>
                                            Click through the tabs to check out
                                            some of the projects I've done!
                                            <i
                                                className="fa fa-user-circle"
                                                aria-hidden="true"
                                            />
                                            <br />
                                            <i className="icon-python" />
                                        </p>
                                    </div>
                                </div>
                                <div id="menu1" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            Hangman&nbsp;&nbsp;
                                            <i className="icon-python" />
                                        </h3>
                                        <p>
                                            Hangman is a game where you keep
                                            guessing letters until you either
                                            solve the puzzle and win, or you
                                            lose by using all you tries.
                                            <a href="https://github.com/Sfreeman99/Hangman">
                                                Click here{' '}
                                            </a>to check it out!
                                        </p>
                                    </div>
                                </div>
                                <div id="menu2" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            Gladiators&nbsp;&nbsp;
                                            <i className="icon-python" />
                                        </h3>
                                        <p>
                                            The objective behind the Gladiators
                                            Game was to make a game that had two
                                            enemies fight each other until one
                                            died. I made two versions of this
                                            game which was in
                                            <a
                                                href="https://github.com/Sfreeman99/Gladiators_classNamees"
                                                target="__blank"
                                            >
                                                classNamees
                                            </a>{' '}
                                            and
                                            <a
                                                href="https://github.com/Sfreeman99/Gladiators_Dictionaries_Version"
                                                target="__blank"
                                            >
                                                Dictionaries
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                                <div id="menu3" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            Rental-Store&nbsp;&nbsp;
                                            <i className="icon-python" />
                                        </h3>
                                        <p>
                                            Our class had to work on the
                                            scenario of working with a rental
                                            agency to build a user friendly
                                            command line interface Python
                                            application to manage the sales,
                                            inventory, and revenue for the
                                            company. We all had to work on this
                                            project by ourselves and come up
                                            with our own solution to the
                                            problem. Also, no project could be
                                            exactly similar so that meant we
                                            could not copy our classmates work
                                            and use it in our own which was the
                                            most difficult part for the class in
                                            my opinion.
                                            <a
                                                href="https://github.com/Sfreeman99/Rental_Store"
                                                target="__blank"
                                            >
                                                Click Here
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                                <div id="menu4" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            Gas Pump&nbsp;&nbsp;
                                            <i className="icon-python" />
                                        </h3>
                                        <p>
                                            This application was made to utilize
                                            what we learned using list. I made
                                            this application 4 weeks in learning
                                            python.
                                            <a
                                                href="https://github.com/Sfreeman99/Gas-Pump"
                                                target="__blank"
                                            >
                                                Click Here
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div id="menu5" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            CommandLine Record
                                            Keeper&nbsp;&nbsp;
                                            <i className="icon-python" />
                                        </h3>
                                        <p>
                                            An application that is written in
                                            python that allows the user to keep
                                            track of his or her records.
                                            Contributers to this project was
                                            <a
                                                href="http://josmith18.github.io"
                                                target="__blank"
                                            >
                                                Jo'Tavious Smith
                                            </a>. To see the code
                                            <a
                                                href="https://github.com/Sfreeman99/Python-Record-Keeper"
                                                target="__blank"
                                            >
                                                Click Here
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div id="menu6" className="tab-pane fade">
                                    <div className="portfolio-text">
                                        <h3>
                                            Flask Recorder Keeper&nbsp;&nbsp;
                                            <i className="icon-html5" />
                                        </h3>
                                        <p>
                                            This application was made because of
                                            the limitations of the CommandLine
                                            Record Keeper. The CommandLine
                                            Record Keeper could only be used on
                                            my computer specifically. The Flask
                                            Record Keeper was made so that you
                                            can use the CommandLine Record
                                            Keeper online. To see the web
                                            project
                                            <a
                                                href="http://sfreeman99.pythonanywhere.com"
                                                target="__blank"
                                            >
                                                Click Here
                                            </a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
