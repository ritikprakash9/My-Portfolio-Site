import java from "../assets/images/Java.png";
import "./blogCard.css";

function BlogCard() {
  return (
    <>
      <div className="card">
        <h2>Let's Learn Java</h2>
        <img src={java} alt="java" />
        <p className="para">
          Java is a programming language and a platform. Java is a high level,
          robust, object-oriented and secure programming language. Java was
          developed by Sun Microsystems (which is now the subsidiary of Oracle)
          in the year 1995. James Gosling is known as the father of Java. Before
          Java, its name ...
        </p>

        <button className="btn-primary">Read more</button>
      </div>
    </>
  );
}

export default BlogCard;
