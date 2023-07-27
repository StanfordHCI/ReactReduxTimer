
  import "reflect-metadata";
  
  export class TimeDelta {
    public hour: number;
    public minute: number;
    public second: number;
  
    constructor({
      hour = 0,
      minute = 0,
      second = 0,
    }: {
      hour?: number;
      minute?: number;
      second?: number;
    }) {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
    }
  
    static setup() {}
  
    // custom comparator for sorting
    static compare(a: TimeDelta, b: TimeDelta) {
      console.log(a.getLeftSecond(), b.getLeftSecond());
      return a.getLeftSecond() - b.getLeftSecond();
    }
  
    static CreateTimeDelta({
      hour = 0,
      minute = 0,
      second = 0,
    }: {
      hour?: number;
      minute?: number;
      second?: number;
    }): TimeDelta {
      return new TimeDelta({
        hour: hour,
        minute: minute,
        second: second,
      });
    }
  
    addOffset({
      hour = 0,
      minute = 0,
      second = 0,
    }: {
      hour: number;
      minute: number;
      second: number;
    }): TimeDelta {
      this.hour = this.hour + hour;
      this.minute = this.minute + minute;
      this.second = this.second + second;
      return this;
    }
  
    getLeftSecond(): number {
      return this.second + this.minute * 60 + this.hour * 3600;
    }
  
    toString() {
      return `${this.hour}:${this.minute}:${this.second}`;
    }
}

  