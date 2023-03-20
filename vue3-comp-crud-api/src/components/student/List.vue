<script setup>
import { EyeIcon, PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router';
const deleteStudent = async (id) => {
  if (!window.confirm("Are you Sure ?")) {
    return;
  }
  console.log("Deleted");
};
</script>

<template>
  <div>
    <div class="bg-orange-600 p-2 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center mt-6">Student List</h1>
      </div>
      <div class="text-right">
        <RouterLink :to="{ name: 'add' }">
          <button class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6">
            <UserPlusIcon />
            Add
          </button>
        </RouterLink>
      </div>
    </div>

    <table class="table-auto w-full">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-2">No.</th>
          <th class="py-2">Name</th>
          <th class="py-2">Email</th>
          <th class="py-2">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">1</td>
          <td class="py-2">Sahil</td>
          <td class="py-2">sahil@123gmail.com</td>
          <td class="py-2">
            <RouterLink :to="{ name: 'view', params: { id: 1 } }">
              <EyeIcon class="text-blue-500 h-6 w-6 inline" />
            </RouterLink>
            <RouterLink :to="{ name: 'edit', params: { id: 1 } }">
              <PencilIcon class="text-emerald-500 h-6 w-6 mx-6 inline" />
            </RouterLink>
            <TrashIcon class="text-red-500 h-6 w-6 inline cursor-pointer" @click="deleteStudent(id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
