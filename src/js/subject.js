import Rx from "rxjs";

export class SubjectsPractice {
    constructor() {
        const btn = document.querySelector("#btn");
        const subject = new Rx.Subject();

        //  subscribing
        subject.subscribe(data => {
            switch (data.action) {
                case "MY_ACTION":
                    console.log("clicked", data.payload);
                    break;
                case "MOUSE_DOWN":
                    console.log("downed", data.payload);
                    break;
            }
        });

        btn.addEventListener("click", () => {
            subject.next({
                action: "MY_ACTION",
                payload: "test my action"
            });
        });


        btn.addEventListener("mouseleave", () => {
            subject.next({
                action: "MOUSE_DOWN",
                payload: "test mouse down"
            });
        });


        const source = Rx.Observable.from([1, 2, 3]);
        const subject2 = new Rx.Subject();
        const multicasted = source.multicast(subject2);

        // These are, under the hood, `subject.subscribe({...})`:
        multicasted.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });
        multicasted.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

    }
}