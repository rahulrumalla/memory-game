<template>
  <div class="grid gap-6">
    <h1 class="text-2xl font-bold">Otters Memory Game</h1>
    <p>
      Your challenge is to develop a simple memory game. Game should have 6x6
      grid of cells that are initially hiding their (randomly selected) images.
      Tap on a cell reveals the image of it. Player’s objective is to find image
      matches in the matrix by opening them. If the second cell contains the
      same image with the first one, match is found and cells remain open. If
      not, both cells go back to their concealed state. The game’s ultimate
      objective is to open up every cell in the matrix by finding every match.
      Once the game is finished, user receives a feedback and given a chance to
      restart the game.
    </p>
  </div>
</template>

<script>
export default {
  name: "Instructions",
};
</script>

<style>
</style>
