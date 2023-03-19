import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const SkeletonOnLoading = () => {
  return (
    <Stack spacing={1} m={1} mt={3}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
};
