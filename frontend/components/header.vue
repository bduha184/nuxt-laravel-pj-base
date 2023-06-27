<template>
  <header class="flex justify-between">
    <h1>
      <div class="logo">
        <NuxtLink class="navbar-brand" to="/">
          <font-awesome-icon class="fa-3x mr-1" icon="fas fa-sticky-note" />
          memo
          </NuxtLink>
      </div>
    </h1>
    <nav class="navbar navbar-expand navbar-dark blue-gradient">

      <ul class="flex ml-auto">
        <li class="nav-item">
          <NuxtLink to="/">ユーザー登録</NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink to="/">ログイン</NuxtLink>
        </li>

        <li class="nav-item">
          <NuxtLink to="/">
            <font-awesome-icon class="fa-3x mr-1" icon="fas fa-pen" />
            投稿する
          </NuxtLink>
        </li>

        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          <font-awesome-icon class="fa-3x mr-1" icon="fas fa-user-circle" />
          </a>
          <div
            class="dropdown-menu dropdown-menu-right dropdown-primary"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <button
              class="dropdown-item"
              type="button"
              onclick="location.href=''"
            >
              マイページ
            </button>
            <div class="dropdown-divider"></div>
            <button form="logout-button" class="dropdown-item" type="submit">
              ログアウト
            </button>
          </div>
        </li>
        <form id="logout-button" method="POST" action=""></form>
        <!-- Dropdown -->
      </ul>
    </nav>
  </header>
</template>
