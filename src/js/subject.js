import Rx from "rxjs";

export class SubjectsPractice {
    run() {
        const subject = new Rx.ReplaySubject(5); // buffer 3 values for new subscribers

        subject.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });

        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.next(4);

        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });

        subject.next(5);
    }
}