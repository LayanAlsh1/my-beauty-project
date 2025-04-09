class specialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <a href="#" class="logo"> my Beauty<span>.</span></a> 


        <nav class="navbar">   
                <a href="index.html">Home</a>
                <a href="products.html">Products</a>
                <a href="#about">about</a>
        </nav>


        <div class="icons">
            <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-user"></a>

        </div>
    </header>
    `
    }
}




class specialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
       <footer class="footer">
    <div class="footer-container">
        <div class="footer-box">
            <h3>My Beauty<span>.</span></h3>
            <p>Your first destination ✨ .</p>
        </div>

        <div class="footer-box">
            <h3>Quick Links</h3>
            <a href="index.html">Home</a>
            <a href="products.html">Products</a>
            <a href="#about">About</a>
        </div>

        <div class="footer-box">
            <h3>Follow us</h3>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">TikTok</a>
        </div>
    </div>

    <div class="footer-credit">
        &copy; 2025 My Beauty Store. All rights reserved.
    </div>
</footer>

    `
    }
}

customElements.define('special-header',specialHeader)
customElements.define('special-footer',specialFooter)