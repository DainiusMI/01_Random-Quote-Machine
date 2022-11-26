

class QuatesComponent extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            text: "",
            author: "",
        };
        this.quotes = [
            {
                quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
                author: "Mark Twain"
            },
            {
                quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
                author: "Dale Carnegie"
            },
            {
                quote: "Success is getting what you want, happiness is wanting what you get.",
                author: "W. P. Kinsella"
            },
            {
                quote: "Don’t let yesterday take up too much of today.",
                author: "Will Rogers"
            },
            {
                quote: "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
                author:"Vernon Sanders Law"
            },
            {
                quote: "A man who has committed a mistake and doesn’t correct it is committing another mistake.",
                author: "Confucius Kongzi"
            },
            {
                quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
                author: "Amelia Earhart"
            }
        ];
        this.newQuote = this.newQuote.bind(this);
    }
    newQuote() {
        const randomIDX = Math.floor(Math.random() * this.quotes.length);
        console.log(this.quotes[randomIDX])
        this.setState({
            text: this.quotes[randomIDX].quote,
            author: this.quotes[randomIDX].author
        })
    }
    render() {
        const randomIDX = Math.floor(Math.random() * this.quotes.length);
        return (
            <div id="quote-box" className="
                    bg-white
                    text-primary
                ">
                <i  id="quote-mark"
                    className="
                        fa-solid fa-quote-left
                        
                    " 
                ></i>

                <h4  id="text"
                    value={this.state.text}
                    className="
                    m-0
                    text-end
                    "
                    >{this.quotes[randomIDX].quote}</h4>

                <p  id="author"
                    value={this.state.author} 
                    className="
                    m-0
                    text-end
                    font-italic
                    "
                >- {this.quotes[randomIDX].author}</p>

                <button id="new-quote" 
                        onClick={this.newQuote}
                        className="
                            btn
                            btn-primary
                            
                        "
                >New quote</button>

                <a  id="tweet-quote"
                    href="twitter.com/intent/tweet" 
                    className="
                    fa-brands fa-twitter
                    "
                ></a>
            </div>
        )
    }
}



ReactDOM.createRoot(document.getElementById("root")).render(<QuatesComponent />);
/// this could be split into two lines
// the horror of not knowing boostrap is bellow
$( document ).ready(function() {
    console.log( "ready!" );
    // body
    $("#root").parent().addClass("bg-primary")
    $("#root").parent().css({
        "width": "100vw",
        "height": "100vh",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center"
    });
    $("#quote-box").css({
        "width": "40rem",
        "display": "grid",
        "grid-template-columns": "repeat(12, 1fr)",
        "grid-template-rows": "auto 3rem 3rem",
        "padding": "2.5rem",
        "border-radius": ".5rem"
    })
    $("#quote-mark").css({
        "grid-column": "1/2",
        "grid-row": "1/2",
        "justify-self": "center",
        "font-size": "2rem"
    })
    $("#text").css({
        "grid-column": "2/13",
        "grid-row": "1/2",

    })
    $("#author").css({
        "grid-column": "2/13",
        "grid-row": "2/3",
        "justify-self": "end",
        "align-self": "center"
    })
    $("#new-quote").css({
        "grid-column": "10/13",
        "grid-row": "3/4",
    })
    $("#tweet-quote").css({
        "grid-column": "1/2",
        "grid-row": "3/4",
        "justify-self": "center",
        "align-self": "center",
        "font-size": "1.5rem",
        "text-decoration": "none"
    })
});
