import type { FC } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { useTimer } from 'hooks/useTimer';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, reset] = useTimer(maxCount);

  return (
    <Box
      p={5}
      w="sm"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="base"
      mb={12}
    >
      <Stat mb={2}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{timeLeft}</StatNumber>
        <ButtonGroup maxW="xs" m={2} variant="contained" isAttached>
          {/* <Button w="xs" colorScheme="green" variant="solid" onClick={reset}>
            Start
          </Button> */}
          <Button
            w="xs"
            colorScheme="red"
            variant="solid"
            leftIcon={<ResetIcon />}
            onClick={reset}
          >
            Reset
          </Button>
        </ButtonGroup>
      </Stat>
    </Box>
  );
};

export default Timer;
