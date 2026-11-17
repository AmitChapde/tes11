// Small random utilities
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = randomInt(0, i);
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

console.log('Random number:', randomInt(1, 100));
console.log('Shuffled list:', shuffle(['🌙', '⭐', '☀️', '🌈', '😂', '💋']));
