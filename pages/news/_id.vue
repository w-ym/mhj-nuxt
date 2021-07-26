<template>
  <div>
      <h2>
          news-content
      </h2>
      <p>Newsid:{{$route.params.id}}</p>
      <li>
          <a href="/">home</a>
      </li>
  </div>
</template>

<script>
export default {
    validate({params}){
        return /^\d+$/.test(params.id)
    }

}
</script>

<style>

</style>