// মোবাইলে মেনুর কোনো লিংকে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("mainNav");
  const collapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });

  nav.querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-item").forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav.classList.contains("show")) collapse.hide();
    });
  });

  // ডেস্কটপে হোভার করে ড্রপডাউন খুললে "#" লিংকে ক্লিক করলে পেজ উপরে লাফ না দেয়
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
});
