document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home');
    const header = document.getElementById('header');
    const welcomeText = document.querySelector('.welcome-text');
    const video = document.querySelector('.video-section video');
    const aboutSection = document.getElementById('about');
    let isScrolling = false;

    // Initially, the header is hidden
    setTimeout(() => {
        header.style.opacity = '1'; // Fade in the header
    }, 2000); // Delay of 2 seconds

    // Show the welcome text after 2 seconds
    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 2000); // Delay of 2 seconds

    // Function to handle scrolling
    function handleScroll() {
        if (isScrolling) return; // Prevent multiple triggers

        isScrolling = true;
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth'
        });

        // Reset the scrolling flag after the scroll is complete
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust timeout based on scroll duration
    }

    // Scroll event listener to trigger smooth scrolling
    homeSection.addEventListener('wheel', handleScroll);

    // Show the arrow based on scroll position
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop < homeSection.offsetHeight) {
            document.getElementById('scroll-arrow').style.display = 'block';
        } else {
            document.getElementById('scroll-arrow').style.display = 'none';
        }
    });

    // Automatically scroll to the About section after 8.2 seconds of video play, if on home section
    video.addEventListener('timeupdate', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const homeSectionHeight = homeSection.offsetHeight;

        if (video.currentTime >= 8.2 && !isScrolling && scrollTop < homeSectionHeight) {
            handleScroll(); // Scroll to About section only if user is on Home section
        }
    });
});

