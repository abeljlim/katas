const checkAir = function(samples, threshold) {
  // Get fraction of total number of samples that are 'dirty'
  let totalSamples = samples.length; // assuming 'clean' and 'dirty' are the only types of samples that exist
  let totalDirtySamples = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      totalDirtySamples++;
    }
  }
  return (totalDirtySamples / totalSamples < threshold) ? "Clean" : "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));