import React from "react";
import picture from '../../images/avatar.jpg'
import './About.css'
import Footer from './Footer'


var refreshed = false;
function refreshPage() {
  if (!refreshed) {
    window.location.reload(false);
  }
}

function About(props) {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 60;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
      if (i < elements.length) {
        i = 0;
      }
    }
  };
  return (
    <>
      <div className='aboutAll' onClick={refreshPage}>
        <h1 className='greeting'>Hello EVERYONE!</h1>
        <p className='typewriter'>
          I am a
          <span
            href="#"
            class="typewrite typeBlink"
            data-period="2500"
            data-type='[" Kdrama Enthusiast", " Gamer", " Casual Chess Player", " Nerd" ," Weeb"]'
          ></span>
        </p>
        <p className='mainText'>
          My name is <strong>Andy Vo  </strong> and I am currently a first year at the <strong>University of Texas at Dallas</strong>
          , studying Computer Science. My first time coding was in my senior year of highschool when
          I was taking a freshman computer science class as an elective. I have discovered my passion
          for coding when I discovered of how much you can do with coding and how it has helped many
          people. I am currently invested in learning machine learning, artificial intelligence, data science,
          and data engineering. In this website I will be posting all my projects and accomplishments to watch
          the improvements of my overall coding skills.
      </p>
        <img src={picture} alt='Avatar' className='avatar' />
      </div>
      <Footer />
    </>
  );
}

export default About;

