import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color='#000'
        mb='33px'
        ml='56px'
      >
        Similar{' '}
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          Target Muscle
        </span>{' '}
        exercises
      </Typography>
      <Stack direction='row' sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
