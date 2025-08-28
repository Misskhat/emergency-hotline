
# 🚨 Project Title: Emergency-Hotline

A responsive web interface for emergency contact management. Built to simulate real-world hotline systems with dynamic DOM interaction and modular JavaScript logic.


### 🔗 Live Preview  
__[Click to View](https://your-live-link.com)__





## 🖼️ Screenshot

![App Screenshot](https://i.ibb.co.com/qVX9VSQ/emergency-hotline-project.png)




## 📚 Learning Notes & Q&A

__1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?__

> __getElementById:__ Select the specific ID and target only ID element.  

> __getElementByClassName:__ Select all same class and target all element.  

> __querySelector:__ Select the first element of ID, class or tags.

> __querySelectorAll:__ Select all same class and target all element. As like *getElementsByClassName*. 

__2. How do you create and insert a new element into the DOM?__ 

At first create a element in DOM and write your innerHTML to a tamplete string (for easy process), if your show to your DOM then target a specific element and then append child to new DOM element. 

__Example:__
`
const div = document.getElementById("existing-div");
const newDiv = document.createElement("div");
newDiv.innerHTML = "<h2>This is the new inner</h2>";
div.appendChild(newDiv)
`

__3. What is Event Bubbling and how does it work?__ 

Event Bubbling as a DOM traversing method. Basically, it's travers from target to parent element; 

Example: 
<div id="parent">
    <button>Click</button>
</div>

for event bubbling method if we click Button then we will travers from Button to parent. Please note, for this method we travese from targent to html root.


__4. What is Event Delegation in JavaScript? Why is it useful?__

Event delegation is a technic of handel child element to his parent element, it's use for code optimization and easy to apply all same element of same event. It's mostly use for faster loading. 

__5. What is the difference between preventDefault() and stopPropagation() methods?__

__preventDefault() :__ this method available in event it's use for prevent the default operation or default element event;

__stopPropagation()) :__ this method available in event, but it's stop the further propagation of the current event in the capturing and bubbling phases not prevent the default operation.







## 🛠️ Tech Stack 

- HTML5  
- CSS3 (Tailwind / DaisyUI)  
- JavaScript (DOM, Events, Modular Functions)


