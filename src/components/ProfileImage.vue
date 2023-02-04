<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-3xl object-cover"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
    };
  },
};
</script>
