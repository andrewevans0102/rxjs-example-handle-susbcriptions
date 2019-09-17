import { interval, Subscription, of, merge } from 'rxjs';
import { take, tap } from 'rxjs/operators';

function unsubscribeExample() {
  const observable = interval(1000);
  const subscription = observable.subscribe(() => console.log('Hello!'));
  setTimeout(() => { 
    subscription.unsubscribe();
    console.log('unsubscribed'); 
  }, 1000);
}

function takeExample(count: number) {
  const intervalCount = interval(1000);
  const takeObservable = intervalCount.pipe(take(count));
  takeObservable.subscribe(x => console.log(x));
}

function multipleObservables() {
  // create a subscription object
  const subs = new Subscription();

  // create observables
  const value$ = of(1,2,3,4);
  const anotherValue$ = of(true);

  // subscribe to observables and add to subscription
  subs.add(value$.subscribe(x => console.log(x)));
  subs.add(anotherValue$.subscribe(x => console.log(x)));

  // calling subs.unsubscribe() will unsubscribe from all sub
  subs.unsubscribe();
}

function multipleObservablesWithTapMerge() {
  // create observables
  const value$ = of(1, 2, 3, 4).pipe(tap(x => console.log(x)));
  const anotherValue$ = of(true).pipe(tap(x => console.log(x)));

  const subs = merge(value$, anotherValue$).subscribe();
  
  subs.unsubscribe();
}

// unsuscribe example
// unsubscribeExample();

// take with count of 2
// takeExample(2);

// take with count of 10
// takeExample(10);

// multiple observables
// multipleObservables();

// multiple observables with tap and merge
multipleObservablesWithTapMerge();