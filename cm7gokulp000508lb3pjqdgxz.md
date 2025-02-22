---
title: "Create own EventEmitter Class in JS"
datePublished: Sat Feb 22 2025 20:57:08 GMT+0000 (Coordinated Universal Time)
cuid: cm7gokulp000508lb3pjqdgxz
slug: create-own-eventemitter-class-in-js
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1740257736870/bf2ec6c7-b312-42b9-81f4-52dd9445d4d6.png
tags: event-driven-architecture, classes-and-objects, classesinjs

---

In an event-driven programming language, we can emit an event on a particular behavior.

In Javascript we’ve many events like \`mouse-hover, click, onBlur, on-hover, onFocous, etc. let’s take an example.

```typescript
submitBtn.addEventListener("click" , () => {
    console.log("I'm Jasraj Chouhan a full stack web developer");
} )
```

So, in the above code, we register an `addEventListener` on the submit button and the event type is clicked.

But we should learn how to create our own `EventEmitter Class` which follows :

1. We can register an event
    
2. We can remove an event
    
3. We can emit an event
    

In the whole process we need a data structure which can easily store our event and callback and get in less time or operation. (HashMap or object)

1. Initialize a class with the name of `EventEmitter` with the constructor.
    
    1. ```javascript
        export class EventEmitter {
            constructor() {
               this.events = new Map();
            }
        }
        ```
        
2. Register an event
    
    1. ```javascript
        export class EventEmitter {
            constructor() {
               this.events = new Map();
            }
        
            on(event, listener) { // example btn.on("click" , () => {})
                if (!this.events.has(event)) {
                    this.events.set(event, []);
                }
                this.events.get(event).push(listener);
            }
        }
        ```
        
3. Remove an event
    
    1. ```javascript
        export class EventEmitter {
            constructor() {
               this.events = new Map();
            }
        
            on(event, listener) { // example btn.on("click" , () => {})
                if (!this.events.has(event)) {
                    this.events.set(event, []);
                }
                this.events.get(event).push(listener);
            }
            
             off(event, listener) { // btn.off("click" , () => {})
                if (this.events.has(event)) {
                    this.events.set(event, this.events.get(event).filter(cb => cb !== listener));
                }
            }
        }
        ```
        
4. Trigger an event or emit an event
    
    1. ```javascript
        export class EventEmitter {
            constructor() {
               this.events = new Map();
            }
        
            on(event, listener) { // example btn.on("click" , () => {})
                if (!this.events.has(event)) {
                    this.events.set(event, []);
                }
                this.events.get(event).push(listener);
            }
            
             off(event, listener) { // btn.off("click" , () => {})
                if (this.events.has(event)) {
                    this.events.set(event, this.events.get(event).filter(cb => cb !== listener));
                }
            }
        
            emit(event, ...args) {
                if (this.events.has(event)) {
                    this.events.get(event).forEach(listener => listener(...args));
                }
            }
        }
         
        ```