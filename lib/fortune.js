// modularize fortune cookie implementation
const fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
	"Blessed are the children, for they shall inherit the national debt."
]

// global var "exports"
// to make visible outside of module, must add to exports
// fortuneCookies array is hidden, getFortune function is not
// form of encapsulation to create less error-prone code
exports.getFortune = () => {
	const index = Math.floor(Math.random()*fortuneCookies.length)
	return fortuneCookies[index]
}