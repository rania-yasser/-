/*  change image  **/
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

/* select 2 */
$(document).ready(function () {
  /* jop_select */
  $('.jop_select').select2();

  $('.jop_select').one('select2:open', function (e) {
    $('input.select2-search__field').prop('placeholder', 'بحث  عن المهنة أو الدور الصحفي ');
  });


  /* services_select */
  $(".services_select").select2({
    multiple: true,
  });

  /* select_filte */
  $('.select_filte').select2();
  $('.select_filte').one('select2:open', function (e) {
    $('input.select2-search__field').prop('placeholder', 'بحث  عن المهنة أو الدور الصحفي ');
  });

});

/* form-steps */
jQuery(document).ready(function () {
  // click on next button
  jQuery('.form-wizard-next-btn').click(function () {
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    var next = jQuery(this);
    var nextWizardStep = true;
    parentFieldset.find('.wizard-required').each(function () {
      var thisValue = jQuery(this).val();

      if (thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
      } else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
    if (nextWizardStep) {
      next.parents('.wizard-fieldset').removeClass("show", "400");
      currentActiveStep.removeClass('active').addClass('activated').next().addClass('active', "400");
      next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show", "400");
      jQuery(document).find('.wizard-fieldset').each(function () {
        if (jQuery(this).hasClass('show')) {
          var formAtrr = jQuery(this).attr('data-tab-content');
          jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
            if (jQuery(this).attr('data-attr') == formAtrr) {
              jQuery(this).addClass('active');
              var innerWidth = jQuery(this).innerWidth();
              var position = jQuery(this).position();
              jQuery(document).find('.form-wizard-step-move').css({
                "left": position.left,
                "width": innerWidth
              });
            } else {
              jQuery(this).removeClass('active');
            }
          });
        }
      });
    }
  });
  //click on previous button
  jQuery('.form-wizard-previous-btn').click(function () {
    var counter = parseInt(jQuery(".wizard-counter").text());;
    var prev = jQuery(this);
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    prev.parents('.wizard-fieldset').removeClass("show", "400");
    prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show", "400");
    currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active', "400");
    jQuery(document).find('.wizard-fieldset').each(function () {
      if (jQuery(this).hasClass('show')) {
        var formAtrr = jQuery(this).attr('data-tab-content');
        jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
          if (jQuery(this).attr('data-attr') == formAtrr) {
            jQuery(this).addClass('active');
            var innerWidth = jQuery(this).innerWidth();
            var position = jQuery(this).position();
            jQuery(document).find('.form-wizard-step-move').css({
              "left": position.left,
              "width": innerWidth
            });
          } else {
            jQuery(this).removeClass('active');
          }
        });
      }
    });
  });
  //click on form submit button
  jQuery(document).on("click", ".form-wizard .form-wizard-submit", function () {
    var parentFieldset = jQuery(this).parents('.wizard-fieldset');
    var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
    parentFieldset.find('.wizard-required').each(function () {
      var thisValue = jQuery(this).val();
      if (thisValue == "") {
        jQuery(this).siblings(".wizard-form-error").slideDown();
      } else {
        jQuery(this).siblings(".wizard-form-error").slideUp();
      }
    });
  });
  // focus on input field check empty or not
  jQuery(".form-control").on('focus', function () {
    var tmpThis = jQuery(this).val();
    if (tmpThis == '') {
      jQuery(this).parent().addClass("focus-input");
    } else if (tmpThis != '') {
      jQuery(this).parent().addClass("focus-input");
    }
  }).on('blur', function () {
    var tmpThis = jQuery(this).val();
    if (tmpThis == '') {
      jQuery(this).parent().removeClass("focus-input");
      jQuery(this).siblings('.wizard-form-error').slideDown("3000");
    } else if (tmpThis != '') {
      jQuery(this).parent().addClass("focus-input");
      jQuery(this).siblings('.wizard-form-error').slideUp("3000");
    }
  });
});
$(".form-wizard-next-btn , .form-wizard-previous-btn").click(function () {
  $("html, body").animate({ scrollTop: "200px" }, "slow");
  return false;
});


/* add link */
$(".add_link").click(function () {
  $("#new_link").append('<div class="row mb-3"><div class="col-lg-4 col-md-12 comment-form__input-box mb-2"><label for="title"> عنوان العمل </label><input type="text" id="title" name="title" placeholder=""></div><div class="col-lg-4 col-md-6 comment-form__input-box mb-2"><label for="link"> الرابط </label><input type="text" id="link" name="link" placeholder="#"></div><div class="col-lg-4 col-md-6 comment-form__input-box mb-2"><label>صورة الرابط</label><div class="file-input"><input type="file" name="image"><span class="button">إختر </span><label class="label" data-js-label>لا يوجد ملفات</label></div></div></div>');
});


/* file input */
var inputs = document.querySelectorAll('.file-input')

		for (var i = 0, len = inputs.length; i < len; i++) {
			customInput(inputs[i])
		}

		function customInput(el) {
			const fileInput = el.querySelector('[type="file"]')
			const label = el.querySelector('[data-js-label]')

			fileInput.onchange =
				fileInput.onmouseout = function () {
					if (!fileInput.value) return

					var value = fileInput.value.replace(/^.*[\\\/]/, '')
					el.className += ' -chosen'
					label.innerText = value
				}
		}

  /* dropdown-menu */
  let profile = document.querySelector('.profile');
  let menu = document.querySelector('.menu');

  profile.onclick = function () {
    menu.classList.toggle('active');
  }