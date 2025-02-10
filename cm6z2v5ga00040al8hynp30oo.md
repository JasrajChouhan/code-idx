---
title: "A Deep Dive into the Presentation Container Pattern with React.js"
seoTitle: " A Deep Dive into the Presentation Container Pattern with React.js"
seoDescription: "Use the Presentation Container Pattern in React.js to improve UI separation, enhancing structure, reusability, and maintainability"
datePublished: Mon Feb 10 2025 13:17:12 GMT+0000 (Coordinated Universal Time)
cuid: cm6z2v5ga00040al8hynp30oo
slug: a-deep-dive-into-the-presentation-container-pattern-with-reactjs
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1739193049714/794644c2-1064-4142-99d8-80bccda05e5a.png
tags: design-patterns, react-js, presentation-and-container-design-patterns, reactwithtypescript

---

## These are reusable solutions to common software design problems that help improve the overall structure of your application.

Take a closer look at one specific design pattern – the ***Presentation Container Pattern*** – with practical examples in **React.js**.

### The Presentation Container Design Pattern

let’s dive into one specific design pattern: the **Presentation Container Pattern**. This pattern is especially useful in the context of **UI development** in modern JavaScript frameworks like [**React.js**.](https://react.dev/)

#### What is the Presentation Container Pattern?

In a nutshell, the **Presentation Container Pattern** separates the **UI logic** from the **business logic** in your application. It defines two distinct layers:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739191607725/8155139b-0bfc-4853-ba64-0f4898405331.png align="center")

1. **Presentation Components (UI)**: These are the components responsible only for displaying data. They don’t contain any business logic. Their role is to focus on **how** things look and **how** the user interacts with the interface. They rely on props passed down from container components to render the UI.
    
2. **Container Components (Logic)**: These components handle the application's business logic, data fetching, and state management. They pass the necessary data down (by props) to the presentation components as props. The container components don’t handle how things are displayed; instead, they focus on **what** data needs to be rendered.
    

This pattern helps break up the complexities of a large application into smaller, more manageable pieces. The separation of concerns between presentation and logic also makes it easier to maintain and scale your application over time.

### Why Use the Presentation Container Pattern in [React](https://react.dev/)?

[React](https://react.dev/) is known for its component-based architecture, where you can break down your UI into small, reusable components. However, as your application grows, it can become difficult to manage the logic and data flow.

Main focus on achieving `single responsibility principle`

Why this pattern is useful in [React](https://react.dev/) development:

1. **Separation of Concerns**: Easily do difference b/w logic and ui(user interface), and handle independently.
    
2. **Improved Reusability**: Presentational components become more reusable because they are decoupled from any application-specific logic. Try to make `dump component` which don’t know, how I get props.
    
3. **Easier Testing**: Since the presentation components are only responsible for rendering UI and don't have any logic, they become much easier to test. You can use ***Playwright*** like testing library.
    
4. **Maintainability**: As the application grows, managing business logic separately from UI logic helps you maintain a clean codebase.
    

### How to Implement the Presentation Container Pattern in [React](https://react.dev/)?

While this blog is meant to introduce you to the pattern, we’ll be diving into the practical implementation of this design pattern with React in the next section. Stay tuned as we break down the code and see how you can apply the **Presentation Container Pattern** in your own React projects.

I take an example of [***form***](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) ***and*** [***input***](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1739192104875/3dc17d6d-3263-4e8f-8807-9ac3c606840f.png align="center")

  
  
*TextInputForm.tsx component* only define and use for showing ui. Logical handle by Container part of *TextInputFormContainer component.*

```typescript
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput"; // import from another file.

interface TextInputFormProps {
    inputType: "password" | "text";
    handleShowHideButton: () => void;
    handleSubmitForm: (event: React.FormEvent) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
// accepting props
function TextInputForm({  
    inputType,
    handleShowHideButton,
    handleSubmitForm,
    handleInputChange,
    value,
}: TextInputFormProps) {
    return (
        <form onSubmit={handleSubmitForm}
            className="flex flex-col space-y-3 py-3 w-[40%] justify-center items-center my-2 "
        >
            <TextInput
                value={value}
                inputType={inputType}
                placeholder="Enter word"
                handleChange={handleInputChange}
                className="border border-blue-400 hover:border-blue-500 transition duration-200 ease-in-out w-full h-10 my-2 px-2"
            />
            <div className="flex space-x-3" >
                <Button
                    type="button"
                    isDisabled={false}
                    variant="secondary"
                    handleClick={handleShowHideButton}
                    text={inputType === "password" ? "Show" : "Hide"}
                />

                <Button
                    type="submit"
                    isDisabled={false}
                    variant="primary"
                    text="Submit"
                />
            </div>
        </form>

    );
}

export default TextInputForm;
```

***TextInputFormContainer .tsx***

```typescript
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextInputForm from "./TextInputForm";  // above component file

function TextInputFormContainer() {

    const [inputType, setInputType] = useState<"password" | "text">("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        console.log(event.target.value);  
    }

    function handleSubmitForm(event: React.FormEvent) {
        event.preventDefault();
        if (value.trim()) {  
            navigate(`/play`, {
                state: {
                    selectedWord: value  
                }
            });
        }
        
    }

    function handleShowHideButton() {
        setInputType((prev) => prev === "password" ? "text" : "password");
        console.log(inputType);  
    }

    return ( // return the whole TextInputForm component
        <TextInputForm
            inputType={inputType}
            handleInputChange={handleInputChange}
            handleSubmitForm={handleSubmitForm}
            handleShowHideButton={handleShowHideButton}
            value={value}  
        />
    );
}

export default TextInputFormContainer;
```

The container Component only use for provide the logic or add the logic in ***TextInputForm.*** Which’ve some important property which accept by ***TextInputForm.***

It show we render or pass ***TextInputFormContainer*** to the parent component and render on screen.

#### For whole code check github repo [code](https://github.com/JasrajChouhan/Hangman-Game/blob/main/src/components/TextInputForm/TextInputFormContainer.tsx)

---

**Conclusion**

The **Presentation Container Pattern** is particularly useful when working with React.js, as it helps separate concerns between UI and business logic, improving both the structure and reusability of your code.