import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

function unsubscribeExample() {
  const observable = interval(1000);
  const subscription = observable.subscribe(() => console.log('Hello!'));
  // subscription.unsubscribe();
}

function takeExample(count: number) {
  const intervalCount = interval(1000);
  const takeObservable = intervalCount.pipe(take(count));
  takeObservable.subscribe(x => console.log(x));
}

// unsuscribe example
// unsubscribeExample();

// take with count of 2
// takeExample(2);

// take with count of 10
takeExample(10);

