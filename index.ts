import { of } from "rxjs";
import { map } from "rxjs/operators";

const source = of("ibrahim", 2, [1, 2, 3]);

source.subscribe(console.log);
