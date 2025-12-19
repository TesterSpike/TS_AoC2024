import {AOC25Day1Puzzle} from '../puzzle/AOC25Day1Puzzle';

describe('AoC 2025 Day 1', () => {
  it.each`
    line | current | expectedResult
    ${'L1'}| ${0} | ${{zero: 0, current: 99, threshold: 1}}
    ${'R2'}| ${99} | ${{zero: 0, current: 1, threshold: 1}}
    ${'L1'}| ${1} | ${{zero: 1, current: 0, threshold: 0}}
    ${'R1'}| ${99} | ${{zero: 1, current: 0, threshold: 1}}
    ${'L68'}| ${50} | ${{zero: 0, current: 82, threshold: 1}}
    ${'L30'}| ${82} | ${{zero: 0, current: 52, threshold: 0}}
    ${'R48'}| ${52} | ${{zero: 1, current: 0, threshold: 1}}
    ${'L5'}| ${0} | ${{zero: 0, current: 95, threshold: 1}}
    ${'R60'}| ${95} | ${{zero: 0, current: 55, threshold: 1}}
    ${'L55'}| ${55} | ${{zero: 1, current: 0, threshold: 0}}
    ${'L1'}| ${0} | ${{zero: 0, current: 99, threshold: 1}}
    ${'L99'}| ${99} | ${{zero: 1, current: 0, threshold: 0}}
    ${'R14'}| ${0} | ${{zero: 0, current: 14, threshold: 0}}
    ${'L82'}| ${14} | ${{zero: 0, current: 32, threshold: 1}}
    ${'L251'}| ${11} |${{zero:0, current:60, threshold: 3}}`
  ('returns the correct "$expectedResult" from "$line" and start "$current"', ({line, current, expectedResult}) => {
    expect(new AOC25Day1Puzzle().getZeroCountFromLine(line, current, 0)).toEqual(expectedResult)
  });

  it.each`
    delta | currentNumber | currentThreshold | expectedResult
    ${-1} | ${0} | ${3} | ${{zero: 0, current: 99, threshold: 4}}
    ${-100} | ${0} | ${0} | ${{zero: 1, current: 0, threshold: 1}}
    ${251} | ${52} | ${3} | ${{zero: 0, current: 3, threshold: 6}}
  `
  (`{$delta, $currentNumber, $currentThreshold} should have $expectedResult`,
      ({delta, currentNumber, currentThreshold, expectedResult}) => {
    expect(new AOC25Day1Puzzle().processDelta(delta, currentNumber, currentThreshold)).toEqual(expectedResult)
  });

  it('will process the delta correctly', () => {
    const day1 = new AOC25Day1Puzzle();
    let answer = {zero: 0, current: 0, threshold: 0}
    answer = day1.processDelta(1, answer.current, answer.threshold);
    expect(answer).toEqual({zero: 0, current: 1, threshold: 0});

    answer = day1.processDelta(-1, answer.current, answer.threshold)
    expect(answer).toEqual({zero: 1, current: 0, threshold: 0});

    answer = day1.processDelta(500, answer.current, answer.threshold)
    expect(answer).toEqual({zero: 1, current: 0, threshold: 5});

  });

  it.each `
  line | expected
  ${'R1'}  | ${1}
  ${'L99'} | ${-99}
  ${'R0'} | ${0}
  ${'L0'}  | ${-0}`('$line converted to $expected', ({line, expected}) => {
    expect(new AOC25Day1Puzzle().getDeltaFromLine(line)).toEqual(expected)
  });
});

describe('AoC 2025 Day 1 Puzzle 1', () => {
  it.each`
  file_name |start_number | expected_count
  ${"day1_test1.txt"} | ${50} | ${3}
  ${"day1_test1.txt"} | ${1} | ${3}
  ${"day1_test2.txt"} | ${25} | ${70}`
  ('returns $expected_count from file $file_name with starting number $start_number', ({file_name, expected_count}) => {
    expect(new AOC25Day1Puzzle().getZeroesFromInput(`./src/aoc/2025/day1/resources/${file_name}`, 50)).toEqual(expected_count)
  });
});

describe('AoC 2025 Day 1 Puzzle 2', () => {
  it.each`
  file_name |start_number | expected_count
  ${"day1_test1.txt"} | ${50} | ${6}
  ${"day1_test1.txt"} | ${1} | ${6}
  ${"day1_test2.txt"} | ${25} | ${90}`
  (`returns correct threshold for $file_name`, ({file_name, start_number, expected_count}) => {
    expect(new AOC25Day1Puzzle().getThresholdsFromInput(`./src/aoc/2025/day1/resources/${file_name}`, start_number)).toEqual(expected_count)
  })
});



