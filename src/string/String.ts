interface String {
    capitalizeFirstLetter(): string
}

String.prototype.capitalizeFirstLetter = function() {
    if (this.length == 0) return ''
    return this.charAt(0).toUpperCase() + this.slice(1)
}