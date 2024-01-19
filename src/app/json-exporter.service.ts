import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JsonExporterService {
  constructor() {}
  data = {
    S: "Single-responsibility principle. A class should have only one job",
    O: "Open-closed principle. Objects must be open for extension but closed for modification.",
    L: "Liskov substitution principle. Let q (x) be a property provable about objects of x of type T. Then q (y) should be provable for objects y of type S where S is a subtype of T.",
    I: "Interface segregation principle. You cannot force clients to implement an interface that they are not using.",
    D: "Dependency Inversion Principle. Entities must depend on abstractions, not on concretions.",
  };

  exportFile(fileName: string) {
    let dataUri = "data:application/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(this.data));
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", fileName + ".json");
    linkElement.click();
  }
}
