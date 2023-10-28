const toggleButton = document.querySelector('#toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  

  if (isDarkMode) {
    element.classList.add('fade-in-element');
  } else {
    element.classList.remove('fade-in-element');
  }
});


const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
  body.classList.add('dark-mode');
  element.classList.add('dark-mode');
}




function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('content').style.display = 'block';

    const aosDelay = 2000;
    setTimeout(function () {
     
        AOS.init({
            duration: 2000,
            easing: 'ease',
        });

        AOS.refresh();
    }, aosDelay);
}

window.addEventListener('load', function () {
    showLoadingSpinner();

    setTimeout(function () {
        hideLoadingSpinner();
    }, 5000);
});


window.addEventListener('beforeunload', function () {
    showLoadingSpinner();
});






var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };



    function sendEmail() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        const subject = 'Contact Form Submission';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
        // Create a "mailto" URL
        const mailtoUrl = `mailto:giansodusta00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
        // Open the user's default email client
        window.location.href = mailtoUrl;
      }
      