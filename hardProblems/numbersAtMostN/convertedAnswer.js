
function atMostNGivenDigitSet(digits, n) {
        let S = n.toString();
        let K = S.length;
        let yarra = Array(K + 1).fill(0);
        yarra[K] = 1;

        for (let i = K-1; i >= 0; --i) {
            let Si = S.charAt(i) - 0
            for (const d of digits) {
                if (d < Si) {
                    yarra[i] += Math.pow(digits.length, K-i-1);
                }
                else if (d == Si) {
                    yarra[i] += yarra[i+1];
                }
            }
        }

        for (let i = 1; i < K; ++i) {
            yarra[0] += Math.pow(digits.length, i);
        }
        return yarra[0]
}

atMostNGivenDigitSet(["1","4","9"], 1000000000)