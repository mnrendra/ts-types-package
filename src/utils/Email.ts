type Email<
Domain extends string = string,
DomainName extends string = string
> = `${string}@${DomainName}.${Domain}`

export default Email
