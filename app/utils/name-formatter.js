export default function NameFormatter(name) {
  this.name = name;
  this.fullName = function() {
    return this.name.first + " " + this.name.last;
  };
}
