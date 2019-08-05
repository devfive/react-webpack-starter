const NOTIFY_DIVIDER: string = '------------';

export function batchedSubscribeNotifier(notify: () => void): void {
  if (__DEV__) {
    // tslint:disable-next-line: no-console
    console.log(NOTIFY_DIVIDER);
  }

  notify();
}
