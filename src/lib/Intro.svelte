<script lang="ts">
  import profile from "../profile.jpg";
</script>

<div class="max-w-xl grid grid-cols-12 grid-rows-6 h-96">
  <div
    class="col-start-1 col-end-10 row-start-1 row-end-5 py-10 bg-white text-center border-8 pl-6 pr-10 text-xl border-yellow-400"
  >
    Hello my name is John Pangalos and welcome to my infinite page of cats!
    Don't worry there is no end. So you're free to just keep scrolling.
  </div>
  <img
    class="col-start-8 col-end-13 row-start-4 row-end-7 object-contain border-8 border-green-400"
    rel="preload"
    src={profile}
    alt="profile"
  />
</div>
