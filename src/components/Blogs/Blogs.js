import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div class="blog-container">
      <hr />
      <div class="single-blog">
        <h5>WHAT IS CONTEXT API?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> Context API is a kind of
          new feature to effectively produce global variables and can be passed
          across the app of React JS. This context API is added in version 16.3.
          and it allows us to share state across the app. The basic concept of
          Context API is to hold the data and be the parent of all the
          components which might need that store data. In other word we can say
          that, it is a way for a React app to effectively produce global
          variables and passed around the other components. Contest API This is
          the better alternative to "prop drilling" or moving props from
          grandparent to child to parent. By using it, we can share data with
          multiple components, without having to pass data through props
          manually.
        </p>
      </div>
      <div class="single-blog">
        <h5>WHAT IS SEMANTIC TAGS IN HTML?</h5>
        <p>
          <span class="answare-keyword">Answare:</span>In HTML we use Semantic
          elements and tags. Semantic elements have meaningful names which tells
          about type of content. Those tags are provideing meaning to an HTML
          page rather than just presentation. Those semantic elements and tags
          are clearly describe their meaning in a human and machine readable
          way. Those semantic tags are easier to read. So that, the programmers
          can read through hundreds or thousands of lines of code and understand
          that code very easily. The semantic naming mirrors proper custom
          element/component naming to understand code better. Not only the
          programmers, but also search engines and assistive technologies are
          also able to understand the context and content of a website better.
        </p>
      </div>
      <div class="single-blog">
        <h5>WHAT IS THE DIFFERENCE BETWEEN INLINE AND BLOCK ELEMENTS?</h5>
        <p>
          <span class="answare-keyword">Answare:</span> There are two types of
          elements in HTML: Inline elements and block elements. The block
          elements take up the space of an entire line but the inline elements
          only takes up as much width as necessary. So, there will be only one
          line for block elements within the space width, on the other hand in a
          single line mamy inline elements can sit one after anither. Inline
          elements don’t start from a new line and don’t have top and bottom
          margins. But block elements start with a new line and it have top and
          bottom margin. So, browsers automatically add some margin before and
          after of a block elements and inline elements remains as their own
          size.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
