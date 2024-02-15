var pdfNotesCategory;
var currentTab = "audio";
$("#podcastpage").on("touchmove", function(event) {
                     if (tablet === true) {
                     $("#podextramenupanel").panel("close");
                     }
                     event.preventDefault();
                     });
$(document).on("pagecreate", "#podcastpage", function() {
               try{
               mediaRefreshing = false;
               
               $(".ui-header").on("touchmove",function(e){e.preventDefault();});
               $(".ui-footer").on("touchmove",function(e){e.preventDefault();});
               
               $("#podcastviewheader").html(resources.mediahead);
               
               
               $(".novideosdiv").html(resources.novideosdiv);
               $(".noaudiosdiv").html(resources.noaudiosdiv);
               $("#nouserplaylistdiv").html(resources.noplaylistdiv);
               $(".novideosdiv").hide();
               $(".noaudiosdiv").hide();
               $("#nouserplaylistdiv").hide();
               $("#mediavideomenubtnli").show();
               $("#mediaaudiomenubtnli").show();
               $("#mediaplistmenubtnli").show();
               if (activeUser.hasvideos == false) {
               $("#mediavideomenubtnli").hide();
               }
               if (activeUser.hasaudio == false) {
               $("#mediaaudiomenubtnli").hide();
               $("#mediaplistmenubtnli").hide();
               }
               
               $(".hidebtntxt").html(resources.hidebtntxt);
               //$(".coursesimgtxt").html(resources.coursesimgtxt);
                   $(".coursesimgtxtNew").html(resources.coursesimgtxtNew);
               $(".helpdeskimgtxt").html(resources.helpdeskimgtxt);
               $(".supportimgtxt").html(resources.supportimgtxt);
               $(".logoutimgtxt").html(resources.logoutimgtxt);
               $(".refreshimgtxt").html(resources.refreshimgtxt);
               $(".closehelpimgtxt").html(resources.closehelpimgtxt);
               $("#settingspodmenuheader").html(resources.settingsmenuhead);
               $("#mediavideobtnimgtxt").html(resources.myvideos);
               $("#mediaaudiobtnimgtxt").html(resources.mymusic);
               $("#mediaplbtnimgtxt").html(resources.myplaylist);
               $("#playlistpopuphead").html(resources.playlisttitlehead);
               
               if (fileMainDir != undefined && mediaDataDir === undefined) {
               getUserRootDir(function(ret) {
                              if (mediaDataDir !== undefined && audioMediaDir === undefined) {
                              mediaDataDir.getDirectory("AudioMedia", {
                                                        create: true
                                                        }, getAudioMediaDataDir, onError);
                              }
                              if (mediaDataDir !== undefined && videoMediaDir === undefined) {
                              mediaDataDir.getDirectory("VideoMedia", {
                                                        create: true
                                                        }, getVideoMediaDataDir, onError);
                              }
                              });
               }
               if (docsFileSystem !== undefined && docsFileDir === undefined) {
               docsFileSystem.root.getDirectory(resources.companyname, {
                                                create: true
                                                }, getDocsFileRootDir, onError);
               }
               if (retinaDisplay === true && device.platform === "Android") {
               $("#podextramenupanel").addClass("pixelx2");
               }
               activeTab = activeUser.startuppage;
               $("#userplaylisttab").removeClass("fronttab");
               $("#audiotab").removeClass("fronttab");
               $("#videostab").removeClass("fronttab");
               if (activeUser.savedMediaPosition !== undefined && activeUser.savedMediaPosition.tabname !== undefined) {
               mediaLoadIds = {
               tabname: activeUser.savedMediaPosition.tabname == undefined ? "" : activeUser.savedMediaPosition.tabname,
               tabid: activeUser.savedMediaPosition.tabid == undefined ? "" : activeUser.savedMediaPosition.tabid,
               categoryid: activeUser.savedMediaPosition.categoryid == undefined ? "" : activeUser.savedMediaPosition.categoryid,
               itemid: activeUser.savedMediaPosition.itemid == undefined ? "" : activeUser.savedMediaPosition.itemid
               };
               activeTab=mediaLoadIds.tabname !== undefined ? mediaLoadIds.tabname : "#podcastpage";
               }
               if (activeTab === "#podcastpage" || activeTab==="course") {
               activeTab = "audio";
               setUserMediaPosition("audio", "", "", "");
               $("#userplaylisttab").removeClass("fronttab");
               $("#audiotab").addClass("fronttab");
               $("#videostab").removeClass("fronttab");
               }
               if (activeTab === "userplaylist") {
               $("#userplaylisttab").addClass("fronttab");
               } else {
               if (activeTab === "video") {
               $("#videostab").addClass("fronttab");
               } else {
               $("#audiotab").addClass("fronttab");
               }
               }
               } catch (e) {
               errorHandler("podcastpage.pagecreate", e);
               }
               });






$(document).on("pagebeforeshow", "#podcastpage", function(e) {
               try {
               refreshMenu("refresh");
               loadCoursePage = false;
               startupPageid = "#coursepage";
               setUserPosition(false, "#podcastpage", false);
               pageLoad = "#podcastpage";
               audioFirstPlay = true;
               audioPaused = false;
               videoPaused = false;
               getUserVideosOk = true;
               getUserAudioOk = true;
               $("#podcastpage").addClass("categorylistview");
               $("#podcastpagehead").removeClass("headerhide");
               $("#podcastpagehead").show();
               $("#mediamaincontent").removeClass("playlistviewtab");
               $("#mediamaincontent").addClass(currentTab);
               $("#playlistpopuphead").html(resources.playlisttitle);
               $("#playlisttitlelabel").html(resources.playlistitlelabel);
               $("#playlistitemtitlelabel").html(resources.playlistitlelabel);
               $("#playlisttitleinput").val("");
               $("#settingspodmenuheader").html(resources.settingsmenuhead);
               $("#playilsttitleaddbtn").html(resources.savebtntxt);
               $("#playilsttitlecancelbtn").html(resources.cancelbtntxt);
               $("#playlisttitlepopup").hide();
               $("#playlistitemtitlepopup").hide();
               $("#mediavideobtnimgtxt").html(resources.myvideos);
               $("#mediaaudiobtnimgtxt").html(resources.mymusic);
               $("#mediaplbtnimgtxt").html(resources.myplaylist);
               $("#playlistpopuphead").html(resources.playlisttitlehead);
               $(".hidebtntxt").html(resources.hidebtntxt);
               //$(".coursesimgtxt").html(resources.coursesimgtxt);
                   $(".coursesimgtxtNew").html(resources.coursesimgtxtNew);
               $(".helpdeskimgtxt").html(resources.helpdeskimgtxt);
               $(".supportimgtxt").html(resources.supportimgtxt);
               $(".logoutimgtxt").html(resources.logoutimgtxt);
               $(".refreshimgtxt").html(resources.refreshimgtxt);
               $(".closehelpimgtxt").html(resources.closehelpimgtxt);
               
               
               if (mediaDataDir !== undefined && audioMediaDir === undefined) {
               mediaDataDir.getDirectory("AudioMedia", {
                                         create: true
                                         }, getAudioMediaDataDir, onError);
               }
               if (mediaDataDir !== undefined && videoMediaDir === undefined) {
               mediaDataDir.getDirectory("VideoMedia", {
                                         create: true
                                         }, getVideoMediaDataDir, onError);
               }
               if (tablet === false) {
               $("#podcastpage").addClass("etpmobile");
               $(".ui-content").addClass("etpmobile");
               $("#videoplayerdiv").addClass("etpmobile");
               $(".audioplayerdiv").addClass("etpmobile");
               }
               if (iphone5 === true) {
               $(".ui-page").addClass("iphone5");
               $(".ui-content").addClass("iphone5");
               $(".ui-panel").addClass("iphone5");
               $(".ui-panel-content-wrap-closed").addClass("iphone5");
               $("#mediamaincontent").addClass("iphone5");
               $("#podcontenticonsdivright").addClass("iphone5");
               $(".podcastcattable").addClass("iphone5");
               $(".padderdiv").addClass("iphone5");
               $(".helpdeskpadderdiv").addClass("iphone5");
               $("#mobilepadderdiv").addClass("iphone5");
               $(".coursemenupadderdiv").addClass("iphone5");
               $("#tabcontainer").addClass("iphone5");
               $("#playlistheaderbar").addClass("iphone5");
               $("#playlistheader").addClass("iphone5");
               $("#audioplaycontainerdiv").addClass("iphone5");
               $(".playlistuldiv").addClass("iphone5");
               $("#playlistdiv").addClass("iphone5");
               }
               if (tablet === false) {
               $(".ui-panel-content-wrap").addClass("fullscreenmobile");
               }
               var height = $(window).height() - $("header", $("body").pagecontainer("getActivePage")).height();
               $("#mediamaincontent").css("height", height);
               if (activeUser.savedMediaPosition !== undefined && activeUser.savedMediaPosition.tabname !== undefined) {
               mediaLoadIds = {
               tabname: activeUser.savedMediaPosition.tabname == undefined ? "" : activeUser.savedMediaPosition.tabname,
               tabid: activeUser.savedMediaPosition.tabid == undefined ? "" : activeUser.savedMediaPosition.tabid,
               categoryid: activeUser.savedMediaPosition.categoryid == undefined ? "" : activeUser.savedMediaPosition.categoryid,
               itemid: activeUser.savedMediaPosition.itemid == undefined ? "" : activeUser.savedMediaPosition.itemid
               };
               }
               $("#playlistdiv").show();
               $("#videoplaycontainerdiv").show();
               $("#audioplaycontainerdiv").show();
               $(".tabscontentitem").removeClass("fronttab");
               rotation = 180;
               var contentHeight = $(window).height() - $("header", $("body").pagecontainer("getActivePage")).height();
               $("#playlisttab").css("height", contentHeight);
               $("#videostab").css("height", contentHeight);
               $("#audiotab").css("height", contentHeight);
               $("#userplaylisttab").css("height", contentHeight);
               $(".mediatabbtn").removeClass("ui-btn-active");
               setTimeout(function() {
                          videoPodcastScroller = new IScroll("#videopodcastdiv", {
                                                             bounce: false
                                                             });
                          }, 0);
               setTimeout(function() {
                          userPlaylistScroller = new IScroll("#userplaylistdiv", {
                                                             bounce: false
                                                             }); }, 0);
               setTimeout(function() {
                          audioPodcastScroller = new IScroll("#audiopodcastdiv", {
                                                             bounce: false
                                                             });
                          }, 0);
               setTimeout(function() {
                          playlistScroller = new IScroll("#playlistdiv", {
                                                         bounce: false
                                                         });
                          }, 0);
               
               pageLoad = "#podcastpage";
               
               $("#noaudiopodcastdiv").show();
               $("#noaudiopodcastdiv").html(resources.downloadingaudio);
               $("#novideopodcastdiv").show();
               $("#novideopodcastdiv").html(resources.downloadingvideo);
               $("#nouserplaylistdiv").show();
               $("#nouserplaylistdiv").html(resources.downloadingplaylists);
               
               
               showPleaseWait();
               
               if (mediaInit === true && mediaRefreshing === false) {
               resetFileDownload(true);
               mediaRefreshing = true;
               }
               
               // NOT DEFERRED LISTINGS
               var videoInit = mediaInit;
               var audioInit = mediaInit;
               var playlistInit = mediaInit;
               activeUser.getStoredFilesListAsync("videocategories", videoInit, function(retVal) {
                                                  if(deviceIsOnline===false && retVal===false && ignoreWarnings===false){
                                                  ignoreWarnings = true;
                                                  msgStr = resources.refreshmedia;
                                                  msgTitle = resources.connError;
                                                  msgBtnValue = resources.btnOk;
                                                  
                                                  }
                                                  getVideosForUser(videoInit, function(ret){
                                                                   hidePleaseWait();
                                                                   });
                                                  
                                                  setTimeout(function() {
                                                             setPagePadderDiv("videoPodcastScroller", true);
                                                             ignoreWarnings = false;
                                                             }, 600);
                                                  
                                                  });
               
               activeUser.getStoredFilesListAsync("audiocategories", audioInit, function(retVal) {
                                                  getAudiosForUser(audioInit, function(ret){
                                                                   hidePleaseWait();
                                                                   });
                                                  
                                                  setTimeout(function() {
                                                             setPagePadderDiv("audioPodcastScroller", true);
                                                             ignoreWarnings = false;
                                                             }, 600);
                                                  
                                                  });
               
               setInitialTabs(function(ret){
                              if (mediaInit===true){
                              setTimeout(function(){
                                         if(deviceIsOnline===true){
                                         //mediaRefreshing=false;
                                         mediaInit=false;
                                         useExistingMedia = true;
                                         }
                                         }, 2000);
                              }
                              });
               
               setTimeout(function() {mediaRefreshing = false; podrefresh=false;}, 34000);
               
               
              	if(device.platform==="Android"|| device.platform==='iOS'){
               document.addEventListener("remote-event", function(event) {
                                         try{
                                         if(remoteControlsOk===true){
                                         remoteControlsOk=false;
                                         if(event.remoteEvent.subtype==="prevTrack" || event.remoteEvent.subtype==="nextTrack"){
                                         var audioItemNo;
                                         if(remoteImage === configs.getCustom("CS_PLAYLIST_ICONFILE")){
                                         if(currentPlaylist!==undefined){
                                         audioItemNo = event.remoteEvent.subtype==="prevTrack" ? currentAudioPlaylistNo - 1 : nextAudioLoadTrackNo;
                                         audioItemNo = (audioItemNo < 0) ? 0 : (audioItemNo === currentPlaylist.playlistitems.length) ? 0 : audioItemNo;
                                         var playlistItem = currentPlaylist.playlistitems[audioItemNo];
                                         if(playlistItem!==undefined){
                                         var categoryRef = playlistItem.categoryref;
                                         var audioId = playlistItem.audioid + "mp3";
                                         if(categoryRef!==undefined && categoryRef.length > 0){
                                         var idsPl = categoryRef.split("-");
                                         var tabid = idsPl[0];
                                         var audiocategoryid = idsPl[1] + "-" + idsPl[2];
                                         var category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                                         if (category !== undefined) {
                                         var audio = category.getAudioItemById(audioId);
                                         playPlaylistAudio(currentPlaylist, playlistItem, audio, category);
                                         }
                                         }
                                         }
                                         }
                                         }else{
                                         if(currentAudioCategory !== undefined && currentAudioCategory.audios !== undefined && currentAudioCategory.audios.length > 0 && playListAudioSourceList!==undefined){
                                         audioItemNo = event.remoteEvent.subtype==="prevTrack" ? currentAudioPlaylistNo - 1 : nextAudioLoadTrackNo;
                                         audioItemNo = (audioItemNo < 0) ? 0 : (audioItemNo === currentAudioCategory.audios.length) ? 0 : audioItemNo;
                                         playAudioAudio(playListAudioSourceList[audioItemNo], currentAudioCategory, true);
                                         }
                                         }
                                         }
                                         setTimeout(function(){remoteControlsOk=true;},300);
                                         }
                                         }catch(e){}
                                         });
               }
               activeUser.setUserPlaylistIconFile(function(){});
              
               } catch (e) {
               errorHandler("podcastpage.pagebeforeshow", e);
               }
               });







function setInitialTabs(returnFunction) {
    try {
        
        
        $(".mediatabbtn").off("vclick");
        $(".mediatabbtn").on("vclick", function(event) {
                             try{
                             event.preventDefault();
                             audioPaused = true;
                             videoPaused = true;
                             if (videoVideoPlayer != undefined) {videoVideoPlayer.pause();}
                             if (audioAudioPlayer1 != undefined) {audioAudioPlayer1.pause();}
                             if (audioAudioPlayer3 != undefined) {audioAudioPlayer3.pause();}
                             var id = $(event.currentTarget).attr("id");
                             mediaSeriesBtnOk = true;
                             $("#videoplaycontainerdiv").hide();
                             $("#audioplaycontainerdiv").hide();
                             $("#podcastpage").addClass("categorylistview");
                             $("#mediamaincontent").removeClass("playlistviewtab");
                             $("#mediamaincontent").addClass(currentTab);
                             $("#podcastpagehead").removeClass("headerhide");
                             $("#podcastpagehead").show();
                             if ($("#tabcontainer").hasClass("plshowing")) {
                             $("#podcastpagehead").removeClass("headerhide");
                             $("#tabcontainer").removeClass("plshowing");
                             $("#footerbarleftbckbtn").hide();
                             $("div.flipper").css("transform", "rotateY(0deg)");
                             }else{
                             $("#podcastpagehead").removeClass("headerhide");
                             $("#podcastpagehead").show();
                             }
                             
                             if($("#footerplaylistselbtn").hasClass("editmode")){
                             $("#footerplaylistselbtn").removeClass("editmode");
                             $(".podcastitemdivdownload").removeClass("editmode");
                             $(".playlistchkbxdiv").addClass('nodisplay');
                             $(".playlistuldiv").removeClass("editmode");
                             }
                             $(".tabscontentitem").removeClass("fronttab");
                             $("#userplaylisttab").removeClass("fronttab");
                             $("#audiotab").removeClass("fronttab");
                             $("#videostab").removeClass("fronttab");
                             $(".mediatabbtn").removeClass("ui-btn-active");
                             if (id == "podmediavideomenubtn") {
                                 $("#settingspodmenuheaderNew").empty();
                                                              $("#settingspodmenuheaderNew").text(resources.myvideos);
                             activeTab = "video";
                             $("#mediamaincontent").removeClass("audio").removeClass("playlist").addClass("video");
                             currentTab = "video";
                             setUserMediaPosition("video", "", "", "");
                             $("#mediavideobtnimgtxt").addClass("liitemdisabled");
                             $("#mediaaudiobtnimgtxt").removeClass("liitemdisabled");
                             $("#mediaplbtnimgtxt").removeClass("liitemdisabled");
                             $("#mediavideobtnimg").addClass("liitemdisabled");
                             $("#mediaaudiobtnimg").removeClass("liitemdisabled");
                             $("#mediaplbtnimg").removeClass("liitemdisabled");
                             
                             $("#videostab").show();
                             $("#podmediavideomenubtn").addClass("ui-btn-active");
                             $("#videostab").addClass("fronttab");
                             $("#userplaylisttab").hide();
                             $("#audiotab").hide();
                             $(".footerbarplaylistli").addClass("nodisplay");
                                 $("#mediafooter").addClass("nodisplayimp");
                             $(".footerbarplaylistselli").addClass("nodisplay");
                             $(".footerbarsettingsli").removeClass("nodisplay");
                             setTimeout(function() {
                                        setPagePadderDiv("videoPodcastScroller", true);
                                        }, 600);
                             } else {
                             if (id == "podmediaaudiomenubtn") {
                                 $("#settingspodmenuheaderNew").empty();
                                                              $("#settingspodmenuheaderNew").text(resources.mymusic);
                             activeTab = "audio";
                             setUserMediaPosition("audio", "", "", "");
                             $("#mediamaincontent").removeClass("video").removeClass("playlist").addClass("audio");
                             currentTab = "audio";
                             $("#mediavideobtnimgtxt").removeClass("liitemdisabled");
                             $("#mediaaudiobtnimgtxt").addClass("liitemdisabled");
                             $("#mediaplbtnimgtxt").removeClass("liitemdisabled");
                             $("#mediavideobtnimg").removeClass("liitemdisabled");
                             $("#mediaaudiobtnimg").addClass("liitemdisabled");
                             $("#mediaplbtnimg").removeClass("liitemdisabled");
                             
                             $("#audiotab").show();
                             $("#audiotab").addClass("fronttab");
                             $("#userplaylisttab").hide();
                             $("#videostab").hide();
                             $(".footerbarplaylistli").addClass("nodisplay");
                                 $("#mediafooter").addClass("nodisplayimp");
                             $(".footerbarplaylistselli").addClass("nodisplay");
                             $(".footerbarsettingsli").removeClass("nodisplay");
                             $("#podmediaaudiomenubtn").addClass("ui-btn-active");
                             setTimeout(function() {
                                        setPagePadderDiv("audioPodcastScroller", true);
                                        }, 600);
                             } else {
                                 $("#settingspodmenuheaderNew").empty();
                                                              $("#settingspodmenuheaderNew").text(resources.myplaylist);
                             activeTab = "userplaylist";
                             setUserMediaPosition("userplaylist", "", "", "");
                             $("#mediamaincontent").removeClass("video").removeClass("audio").addClass("playlist");
                             currentTab = "playlist";
                             $("#userplaylisttab").show();
                             $("#mediavideobtnimgtxt").removeClass("liitemdisabled");
                             $("#mediaaudiobtnimgtxt").removeClass("liitemdisabled");
                             $("#mediaplbtnimgtxt").addClass("liitemdisabled");
                             $("#mediavideobtnimg").removeClass("liitemdisabled");
                             $("#mediaaudiobtnimg").removeClass("liitemdisabled");
                             $("#mediaplbtnimg").addClass("liitemdisabled");
                             
                             setPlaylistSelectBtn();
                             setPlaylistAddBtn();
                             $("#userplaylisttab").addClass("fronttab");
                             $("#audiotab").hide();
                             $("#videostab").hide();
                             $("#userplaylistmenubtn").addClass("ui-btn-active");
                             $(".footerbarplaylistli").removeClass("nodisplay");
                                 $("#mediafooter").removeClass("nodisplayimp")
                             $(".footerbarplaylistselli").removeClass("nodisplay");
                             $(".footerbarsettingsli").removeClass("nodisplay");
                             setTimeout(function() {
                                        setPagePadderDiv("userPlaylistScroller", true);
                                        }, 600);
                             }
                             }
                             
                             $("html,body").animate({
                                                    scrollTop: 0
                                                    }, 300);
                             setTimeout(function() {
                                        setPagePadderDiv("audioPodcastScroller", true);
                                        }, 300);
                             setTimeout(function() {
                                        setPagePadderDiv("videoPodcastScroller", true);
                                        }, 300);
                             setTimeout(function() {
                                        setPagePadderDiv("userPlaylistScroller", true);
                                        }, 300);
                             } catch (e) {
                             errorHandler("mediatabbtn", e);
                             }
                             });
        $("#podcoursebtnli").show();
        $("#podcastviewheader").html(resources.mediahead);
        $("#videoplaycontainerdiv").hide();
        $("#audioplaycontainerdiv").hide();
        $(".mediacontentmain").on("tap", function(event) {
                                  $("#podextramenupanel").panel("close");
                                  });
        
        $("#footersettingsmenubtn").off("vclick");
        $("#footersettingsmenubtn").on("vclick", function(event) {
                                       try{
                                       event.preventDefault();
                                       setPagePadderDiv("userPlaylistScroller", true);
                                       setPagePadderDiv("audioPodcastScroller", true);
                                       setPagePadderDiv("videoPodcastScroller", true);
                                       
                                       $(".pageheaderpanelrhs").show();
                                       //  $("#mediasettingsfooterdiv").show();
                                       $("#podextramenupanel").trigger("updatelayout");
                                       $("#podextramenupanel").panel("open");
                                       } catch (e) {
                                       errorHandler("footersettingsmenubtn", e);
                                       }
                                       });
        $("#footersettingsmenubtnNew").off("vclick");
        $("#footersettingsmenubtnNew").on("vclick", function(event) {
                                              try{
                                              event.preventDefault();
                                              setPagePadderDiv("userPlaylistScroller", true);
                                              setPagePadderDiv("audioPodcastScroller", true);
                                              setPagePadderDiv("videoPodcastScroller", true);

                                              $(".pageheaderpanelrhs").show();
                                              //  $("#mediasettingsfooterdiv").show();
                                              $("#podextramenupanel").trigger("updatelayout");
                                              $("#podextramenupanel").panel("open");
                                              } catch (e) {
                                              errorHandler("footersettingsmenubtnNew", e);
                                              }
                                              });
        $("#podsettingspanelrhs").off("vclick");
        $("#podsettingspanelrhs").on("vclick", function(event) {
                                     try{
                                     rhsMenuOpen = false;
                                     event.preventDefault();
                                     $("#podextramenupanel").panel("close");
                                     } catch (e) {
                                     errorHandler("podsettingspanelrhs", e);
                                     }
                                     
                                     });
        $("#footerplaylistmenubtn").off("vclick");
        $("#footerplaylistmenubtn").on("vclick", function(event) {
                                       try{
                                       event.preventDefault();
                                       $("#podextramenupanel").trigger("updatelayout");
                                       $("#podextramenupanel").panel("open");
                                       } catch (e) {
                                       errorHandler("footerplaylistmenubtn", e);
                                       }
                                       });
        if(activeUser.userplaylists!==undefined && activeUser.userplaylists.length>0){
            $("footerbarplaylistselli").removeClass('nodisplay');
        }else{
            $("footerbarplaylistselli").addClass('nodisplay');
        }
        
        $("#footerbarleftbckbtn").off("vclick");
        $("#footerbarleftbckbtn").on("vclick", function(event) {
                                     try{
                                     event.preventDefault();
                                     $("#videostab").css("display","block");
                                     $("#podextramenupanel").panel("close");
                                     audioPaused = true;
                                     videoPaused = true;
                                     //mediaInit = false;
                                     if($("#tabcontainer").hasClass("plshowing")){
                                     $("#podcastpagehead").removeClass("headerhide");
                                     $("#podcastpagehead").show();
                                     checkPlaylistUpdates(true, function(){});
                                     //mediaRefreshing = false;
                                     if (videoVideoPlayer != undefined) {videoVideoPlayer.pause();}
                                     if (audioAudioPlayer1 != undefined) {audioAudioPlayer1.pause();}
                                     if (audioAudioPlayer3 != undefined) {audioAudioPlayer3.pause();}
                                     $("#videoplaycontainerdiv").hide();
                                     $("#audioplaycontainerdiv").hide();
                                     $("#tabcontainer").removeClass("plshowing");
                                     $("#footerbarleftbckbtn").hide();
                                     $("#podcastpage").addClass("categorylistview");
                                     $("#podcastpagehead").removeClass("headerhide");
                                     $("#podcastpagehead").show();
                                     $("#mediamaincontent").removeClass("playlistviewtab");
                                     $("#mediamaincontent").addClass(currentTab);
                                     
                                     $("div.flipper").css("transform", "rotateY(0deg)");
                                     $("html,body").animate({
                                                            scrollTop: 0
                                                            }, 300);
                                     
                                     if($("#footerplaylistselbtn").hasClass("editmode")){
                                     $("#footerplaylistselbtn").removeClass("editmode");
                                     $(".podcastitemdivdownload").removeClass("editmode");
                                     $(".playlistuldiv").removeClass("editmode");
                                     $(".playlistchkbxdiv").addClass('nodisplay');
                                     }
                                     setPlaylistSeriesBtn();
                                     setPlaylistSelectBtn();
                                     setPlaylistAddBtn();
                                     }else{
                                     $("#podcoursemenubtn").trigger("vclick");
                                     }
                                     } catch (e) {
                                     errorHandler("footerbarleftbckbtn", e);
                                     }
                                     });
        $("#playlistclosebtnnew").off("vclick");
        $("#playlistclosebtnnew").on("vclick", function(event) {
                                  try{
                                  event.preventDefault();
                                  //$("#videostab").css("display","block");
                                  audioPaused = true;
                                  videoPaused = true;
                                  destroyPlayers();
                                  activeUser.saveFilesList(undefined, "userplaylists", false, function() {});
                                  $("#podcastpagehead").removeClass("headerhide");
                                  $("#podcastpagehead").show();
                                  checkPlaylistUpdates(true, function(){});
                                  //mediaRefreshing = false;
                                  if (videoVideoPlayer != undefined) {videoVideoPlayer.pause();}
                                  if (audioAudioPlayer1 != undefined) {audioAudioPlayer1.pause();}
                                  if (audioAudioPlayer3 != undefined) {audioAudioPlayer3.pause();}
                                  $("#videoplaycontainerdiv").hide();
                                  $("#audioplaycontainerdiv").hide();
                                  $("#tabcontainer").removeClass("plshowing");
                                  $("#footerbarleftbckbtn").hide();
                                  $("#podcastpage").addClass("categorylistview");
                                  $("#podcastpagehead").removeClass("headerhide");
                                  $("#podcastpagehead").show();
                                  $("#mediamaincontent").removeClass("playlistviewtab");
                                  $("#mediamaincontent").addClass(currentTab);
                                  
                                  $("div.flipper").css("transform", "rotateY(0deg)");
                                  $("#videostab").css("transform", "scaleX(1)");
                                      $("#audiotab").css("transform", "scaleX(1)");
                                      $("#userplaylisttab").css("transform", "scaleX(1)");
                                  $("#playlisttab").css("transform", "scaleY(0)");
                                  $("html,body").animate({
                                                         scrollTop: 0
                                                         }, 300);
                                  
                                  if($("#footerplaylistselbtn").hasClass("editmode")){
                                  $("#footerplaylistselbtn").removeClass("editmode");
                                  $(".podcastitemdivdownload").removeClass("editmode");
                                  $(".playlistuldiv").removeClass("editmode");
                                  $(".playlistchkbxdiv").addClass('nodisplay');
                                  }
                                  setPlaylistSeriesBtn();
                                  setPlaylistSelectBtn();
                                  setPlaylistAddBtn();
                                  } catch (e) {
                                  errorHandler("playlistclosebtn", e);
                                  }
                                  });
        $("#podclosemenubtn").off("vclick");
        $("#podclosemenubtn").on("vclick", function(event) {
                                 try{
                                 event.preventDefault();
                                 audioPaused = true;
                                 videoPaused = true;
                                 //destroyPlayers();
                                 $("#podextramenupanel").panel("close");
                                 } catch (e) {
                                 errorHandler("podclosemenubtn", e);
                                 }
                                 });
        $("#podmainlogoutbtn").off("vclick");
        $("#podmainlogoutbtn").on("vclick", function(event) {
                                  try{
                                  event.preventDefault();
                                  audioPaused = true;
                                  videoPaused = true;
                                  destroyPlayers();
                                  mediaRefreshing = false;
                                  logoutUser();
                                  $("#podextramenupanel").panel("close");
                                  } catch (e) {
                                  errorHandler("podmainlogoutbtn", e);
                                  }
                                  });
        
        $("#mainamplifybtnpod").off("vclick");

                $("#mainamplifybtnpod").on("vclick", function(event) {
                                      event.preventDefault();
                                    audioPaused = true;
                                    videoPaused = true;
                                    mediaRefreshing = false;
                                    $("#podextramenupanel").panel("close");
                                       window.open("itms-apps://itunes.apple.com/app/id1543532657");

                                       });
        
        $("#podhelpdeskmenubtn").off("vclick");
        $("#podhelpdeskmenubtn").on("vclick", function(event) {
                                    try{
                                    event.preventDefault();
                                    audioPaused = true;
                                    videoPaused = true;
                                    saveFilesListAll();
                                    $("#podextramenupanel").panel("close");
                                    destroyPlayers();
                                    
                                    setTimeout(function() {
                                               goToPage("#helpdeskpage");
                                               }, 300);
                                    } catch (e) {
                                    errorHandler("podhelpdeskmenubtn", e);
                                    }
                                    });
        $("#mediapodclosemenubtn").off("vclick");
        $("#mediapodclosemenubtn").on("vclick", function(event) {
                                      try{
                                      audioPaused = true;
                                      videoPaused = true;
                                      event.preventDefault();
                                      //mediaInit = false;
                                      $("#podextramenupanel").panel("close");
                                      } catch (e) {
                                      errorHandler("mediapodclosemenubtn", e);
                                      }
                                      });
        $("#podrightmenubtn").off("vclick");
        $("#podrightmenubtn").on("vclick", function(event) {
                                 try{
                                 event.preventDefault();
                                 $("#podextramenupanel").trigger("updatelayout");
                                 $("#podextramenupanel").panel("open");
                                 } catch (e) {
                                 errorHandler("podrightmenubtn", e);
                                 }
                                 });
        
        $("#mediavideomenubtn").off("vclick");
        $("#mediavideomenubtn").on("vclick", function(event) {
                                   try{
                                   event.preventDefault();
                                   if($("#mediavideobtnimg").hasClass("liitemdisabled")===false){
                                   $("#podextramenupanel").panel("close");
                                   var triggerId = "#podmediavideomenubtn";
                                   $(triggerId).trigger("vclick");
                                   setTimeout(function() {
                                              setPagePadderDiv("userPlaylistScroller", true);
                                              setPagePadderDiv("audioPodcastScroller", true);
                                              setPagePadderDiv("videoPodcastScroller", true);
                                              hidePleaseWait();
                                              }, 600);
                                   }
                                   } catch (e) {
                                   errorHandler("mediavideomenubtn", e);
                                   }
                                   });
        $("#mediaaudiomenubtn").off("vclick");
        $("#mediaaudiomenubtn").on("vclick", function(event) {
                                   try{
                                   event.preventDefault();
                                   if($("#mediaaudiobtnimg").hasClass("liitemdisabled")===false){
                                   $("#podextramenupanel").panel("close");
                                   var triggerId = "#podmediaaudiomenubtn";
                                   $(triggerId).trigger("vclick");
                                   setTimeout(function() {
                                              setPagePadderDiv("userPlaylistScroller", true);
                                              setPagePadderDiv("audioPodcastScroller", true);
                                              setPagePadderDiv("videoPodcastScroller", true);
                                              hidePleaseWait();
                                              }, 600);
                                   }
                                   } catch (e) {
                                   errorHandler("mediaaudiomenubtn", e);
                                   }
                                   });
        $("#mediaplistmenubtn").off("vclick");
        $("#mediaplistmenubtn").on("vclick", function(event) {
                                   try{
                                   event.preventDefault();
                                   if($("#mediaplbtnimg").hasClass("liitemdisabled")===false){
                                   $("#podextramenupanel").panel("close");
                                   var triggerId = "#userplaylistmenubtn";
                                   $(triggerId).trigger("vclick");
                                   setTimeout(function() {
                                              setPagePadderDiv("userPlaylistScroller", true);
                                              setPagePadderDiv("audioPodcastScroller", true);
                                              setPagePadderDiv("videoPodcastScroller", true);
                                              hidePleaseWait();
                                              }, 600);
                                   }
                                   } catch (e) {
                                   errorHandler("mediaplistmenubtn", e);
                                   }
                                   });
        
        
        
        
        
        
        $("#podcoursemenubtn").off("vclick");
        $("#podcoursemenubtn").on("vclick", function(event) {
                                  try{
                                  event.preventDefault();
                                  $("#podextramenupanel").panel("close");
                                  audioPaused = true;
                                  videoPaused = true;
                                  destroyPlayers();
                                  showPleaseWait();
                                  saveFilesListAll();
                                  $("#videoplaycontainerdiv").hide();
                                  $("#audioplaycontainerdiv").hide();
                                  if ($("#tabcontainer").hasClass("plshowing")) {
                                  $("#tabcontainer").removeClass("plshowing");
                                  $("#footerbarleftbckbtn").hide();
                                  $("#podcastpage").addClass("categorylistview");
                                  $("#mediamaincontent").removeClass("playlistviewtab");
                                  $("#mediamaincontent").addClass(currentTab);
                                  $("#podcastpagehead").removeClass("headerhide");
                                  $("#podcastpagehead").show();
                                  $("div.flipper").css("transform", "rotateY(0deg)");
                                  
                                  $("html,body").animate({
                                                         scrollTop: 0
                                                         }, 300);
                                  }
                                  
                                  if (activeUser.hascourses == false && userHasCourses === false) {
                                  msgStr = resources.enrolledCourses;
                                  msgTitle = resources.loginError;
                                  msgBtnValue = resources.btnCourseEnroll;
                                  
                                  navigator.notification.confirm(msgStr, function(choice) {
                                      if(choice === 2){
                                          hidePleaseWait();
                                          openWebView(activeUser.AddCourseUrl);
                                      }
                                      else{
                                          hidePleaseWait();
                                      }
                                                                 
                                                                 }, msgTitle, msgBtnValue);
                                  } else {
                                  loadCoursePage = false;
                                  if (loadCoursePage === true) {
                                  loadCoursePage = false;
                                  refreshMenu("refresh");
                                  //  Download check....reloadPage = true;
                                  goToPage("#coursepage");
                                  //  Download check....dataRefreshed = false;
                                  } else {
                                  if (dataRefreshed === true) {
                                  //  Download check....reloadPage = true;
                                  refreshMenu("refresh");
                                  //  Download check....reloadPage = true;
                                  $.mobile.navigate("#coursepage");
                                  //  Download check....dataRefreshed = false;
                                  } else {
                                  loadCoursePage = false;
                                  //  Download check....reloadPage = false;
                                  prevPage = "#podcastpage";
                                  pageLoad = "#coursepage";
                                  //setUserPosition(false, "#coursepage", false);
                                  setTimeout(function() {
                                             checkASDUserPodState(false, function(ret){
                                                                  if (device.platform === "Android") {
                                                                  $.mobile.navigate("#coursepage");
                                                                  } else {
                                                                  //$.mobile.back();
                                                                  $.mobile.navigate("#coursepage");
                                                                      refreshMenu("refresh");
                                                                  }
                                                                  });
                                             
                                             }, 300);
                                  
                                  }
                                  }
                                  }
                                  } catch (e) {
                                  errorHandler("podcoursemenubtn", e);
                                  }
                                  });
        $("#podsupportmenubtn").off("vclick");
        $("#podsupportmenubtn").on("vclick", function(event) {
                                   try {
                                   event.preventDefault();
                                   audioPaused = true;
                                   videoPaused = true;
                                   destroyPlayers();
                                   saveFilesListAll();
                                   goToPage("#supportpage");
                                   } catch (e) {
                                   errorHandler("podsupportmenubtn vclick", e);
                                   }
                                   });
        $("#podrefreshbtn").off("vclick");
        $("#podrefreshbtn").on("vclick", function(event) {
                               try {
                               
                               event.preventDefault();
                               if (deviceIsOnline === false) {
                               msgStr = resources.refreshmedia;
                               msgTitle = resources.connError;
                               msgBtnValue = resources.btnOk;
                               navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                               
                               } else {
                               if (podrefresh === false) {
                               saveFilesListAll();
                               podrefresh = true;
                               mediaInit = true;
                               $("#podextramenupanel").panel("close");
                               showPleaseWait();
                               
                               checkPlaylistUpdates(true, function(){
                                                    mediaSetRefresh();
                                                    });
                               
                               if (videoVideoPlayer != undefined) {
                               videoVideoPlayer.pause();
                               }
                               if (audioAudioPlayer1 != undefined) {
                               audioAudioPlayer1.pause();
                               }
                               if (audioAudioPlayer3 != undefined) {
                               audioAudioPlayer3.pause();
                               }
                               destroyPlayers();
                               if ($("#tabcontainer").hasClass("plshowing")) {
                               $("#tabcontainer").removeClass("plshowing");
                               $("#footerbarleftbckbtn").hide();
                               $("#podcastpage").addClass("categorylistview");
                               $("#mediamaincontent").removeClass("playlistviewtab");
                               $("#mediamaincontent").addClass(currentTab);
                               $("#podcastpagehead").removeClass("headerhide");
                               $("#podcastpagehead").show();
                               $("div.flipper").css("transform", "rotateY(0deg)");
                               }
                               
                               if (mediaRefreshing === false) {
                               mediaRefreshing=true;
                               $("body").pagecontainer("change",
                                                       "transition.html", { transition: "flip"
                                                       });
                               setTimeout(function(){goToPage("#podcastpage");}, 1000);
                               }
                               }
                               }
                               } catch (e) {
                               errorHandler("podrefreshbtn vclick", e);
                               podrefresh = false;
                               }
                               });
        $("#videoplaycontainerdiv").hide();
        $("#audioplaycontainerdiv").hide();
        if (mediaLoadIds !== undefined && mediaLoadIds.tabname !== undefined && mediaLoadIds.tabname.length > 0) {
            activeTab = mediaLoadIds.tabname;
        }else{
            activeTab ="audio";
            setUserMediaPosition("audio", "", "", "");
        }
        setUserPosition(false, "#podcastpage", false);
        
        
        setPlaylistSelectBtn();
        setPlaylistAddBtn();
        
        var triggerId = "";
        if (activeTab == "userplaylist") {
            triggerId = "#userplaylistmenubtn";
            $(".footerbarplaylistli").removeClass("nodisplay");
            $("#mediafooter").removeClass("nodisplayimp");
            $(".footerbarplaylistselli").removeClass("nodisplay");
        } else {
            if (activeTab == "video") {
                triggerId = "#podmediavideomenubtn";
            } else {
                if (activeTab == "audio") {
                    triggerId = "#podmediaaudiomenubtn";
                }
            }
        }
        $(triggerId).trigger("vclick");
        setTimeout(function() {
                   setPagePadderDiv("userPlaylistScroller", true);
                   setPagePadderDiv("audioPodcastScroller", true);
                   setPagePadderDiv("videoPodcastScroller", true);
                   hidePleaseWait();
                   }, 600);
        
        returnFunction(true);
    } catch (e) {
        errorHandler("setInitialTabs", e);
    }
}
$(document).on("pagecreate", "#transitionpage", function() {
               $(".transitiontxt").html(resources.transitiontxt);
               });
function playVideoVideo(video) {
    //alert("deviceversion="+device.version);
    try {
        var vidUrl = video.isdownloaded === false ? video.videopath : video.fileuri;
        if (video.isdownloaded === false && (vidUrl.indexOf("http:") < 0 || vidUrl.indexOf("https:") < 0)) {
            //vidUrl = "http://" + vidUrl;
            vidUrl = vidUrl;
        }
        
        currentVideoPlaylistNo = video.seriesindex - 1;
        $("#videoplayerdiv .mejs-time span.mejs-currenttime").html("00:00");
        $("#videoplayerdiv .mejs-time span.mejs-duration").html("00:00");
        $("#videoplayerdiv .mejs-time-current").css("width", 0);
        $("#videoplayerdiv .mejs-time-handle").css("width", 0);
        $("#videoplayerdiv .mejs-time-handle").css("left", 0);
        $("#videoplayerdiv .mejs-time-loaded").css("width", 0);
        $("#videoplayerdiv .mejs-time-float").css("display", "none");
        videoPlayerPlay = true;
        if (vidUrl !== undefined && vidUrl.length > 0) {
            //alert("deviceversion12="+device.version);
            window.plugins.streamingMedia.playVideo(vidUrl);
        }
        
        /*if (vidUrl !== undefined && vidUrl.length > 0 && device.version>=12.0) {
            alert("deviceversion12="+device.version);
            window.plugins.streamingMedia.playVideo(vidUrl);
        }
        else if (vidUrl !== undefined && vidUrl.length > 0 && device.version<12.0) {
            alert("deviceversionless12="+device.version);
            videoVideoPlayer.setSrc(vidUrl);
            videoVideoPlayer.load();
        }*/
        setTimeout(function() {
                   var videoId = (video.videoid).replace("mp4", "");
                   activeUser.updateVideoViews(videoId, function(ret) {});
                   }, 300);
        if (vidUrl.indexOf("http://") > -1 || vidUrl.indexOf("https://") > -1) {
            $("#videoplayerdiv .mejs-playpause-button button").addClass("audioloading");
        }
        $(".videoplayer .mejs-overlay-loading").show();
        playlistActive(false, "", "");
        playlistActive(true, "#playvideo-" + video.categoryid + "-" + video.seriesid + "-" + video.videoid, "video");
        
    } catch (e) {
        errorHandler("playVideoVideo", e);
    }
}


/*
 function playVideoVideo(video) {
 try {
 var vidUrl = video.isdownloaded === false ? video.videopath : video.fileuri;
 if (video.isdownloaded === false && vidUrl.indexOf("http:") < 0) {
 vidUrl = "http://" + vidUrl;
 }
 if (tablet === true || (iosDevice === true && video.isdownloaded === true)) {
 $("#videoplaycontainerdiv").slideDown(300, function() {
 $("#videoplayerhide").show();
 setPagePadderDiv("playlistScroller", false, "video");
 });
 } else {
 $("#videoplaycontainerdiv").show();
 $("#videoplayerdiv").show();
 hideVideoPlayer();
 $("#videoplayerhide").show();
 videoPlayerPlay = true;
 setPagePadderDiv("playlistScroller", false, "video");
 }
 currentVideoPlaylistNo = video.seriesindex - 1;
 $("#videoplayerdiv .mejs-time span.mejs-currenttime").html("00:00");
 $("#videoplayerdiv .mejs-time span.mejs-duration").html("00:00");
 $("#videoplayerdiv .mejs-time-current").css("width", 0);
 $("#videoplayerdiv .mejs-time-handle").css("width", 0);
 $("#videoplayerdiv .mejs-time-handle").css("left", 0);
 $("#videoplayerdiv .mejs-time-loaded").css("width", 0);
 $("#videoplayerdiv .mejs-time-float").css("display", "none");
 videoPlayerPlay = true;
 if (vidUrl !== undefined && vidUrl.length > 0) {
 videoVideoPlayer.setSrc(vidUrl);
 videoVideoPlayer.load();
 }
 setTimeout(function() {
 var videoId = (video.videoid).replace("mp4", "");
 activeUser.updateVideoViews(videoId, function(ret) {});
 }, 300);
 if (vidUrl.indexOf("http://") > -1) {
 $("#videoplayerdiv .mejs-playpause-button button").addClass("audioloading");
 }
 $(".videoplayer .mejs-overlay-loading").show();
 playlistActive(false, "", "");
 playlistActive(true, "#playvideo-" + video.categoryid + "-" + video.seriesid + "-" + video.videoid, "video");
 
 } catch (e) {
 errorHandler("playVideoVideo", e);
 }
 }
 */
function playVideoAndroid(video) {
    try {
        var vidUrl = video.isdownloaded === false ? video.videopath : video.fileuri;
        if (video.isdownloaded === false && (vidUrl.indexOf("http:") < 0 || vidUrl.indexOf("https:") < 0)) {
            vidUrl = vidUrl;
        }
        /*
         if (video.isdownloaded === true) {
         vidUrl = externalStorageVideoDir.toURL() + video.categoryid + "/" + video.filename;
         }
         */
        $("#videoplayerdiv video").attr("sVidrorc", vidUrl);
        if (videoPlaying === false) {
            videoPlaying = true;
            VideoPlayer.play(vidUrl);
        }
        setTimeout(function() {
                   var videoId = (video.videoid).replace("mp4", "");
                   activeUser.updateVideoViews(videoId, function(ret) {});
                   videoPlaying = false;
                   }, 300);
        currentVideoPlaylistNo = video.seriesindex - 1;
        videoPlayerPlay = true;
        if (vidUrl.indexOf("http://") > -1 || vidUrl.indexOf("https://") > -1) {
            $("#videoplayerdiv .mejs-playpause-button button").addClass("audioloading");
        }
        $(".videoplayer .mejs-overlay-loading").show();
        playlistActive(false, "", "");
        playlistActive(true, "#podcastitemdiv-" + video.categoryid + "-" + video.seriesid + "-" + video.videoid, "video");
    } catch (e) {
        errorHandler("playVideoAndroid", e);
    }
}

function playAudioAudio(audio, category, updateplayer) {
    try {
        if (updateplayer === undefined) {
            updateplayer = true;
        }
        playAudioItem = undefined;
        var params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
        resetAudio3Timing = 0;
        audioPlayer1Play = false;
        startFirstTrack = false;
        loadNextAudioTrack = false;
        trackUpdating = false;
        audioPlayerPositionSet = false;
        audioPlayerPositionSetTime = 0;
        
        //audio.fileuri = audio.fileuri.replace("file:///","/");
        //nextAudioUrl = audio.isdownloaded === false ? audio.audiopath : audio.fileuri;
        //alert(nextAudioUrl);
        nextAudioUrl = audio.audiopath;
        currentAudioPlaylistNo = audio.seriesindex;
        nextAudioLoadTrackNo = audio.seriesindex + 1;
        if (nextAudioLoadTrackNo > category.audios.length - 1) {
            nextAudioLoadTrackNo = 0;
        }
        var remoteUrlUsed = (nextAudioUrl.indexOf("http:") < 0 || nextAudioUrl.indexOf("https:") < 0) ? false : true;
        audioPaused = false;
        if (category.audiomixdownloaded === "true1" && audioMixLoaded === false && category.audiomixurl.length > 0) {
            audioAudioPlayer3.pause();
            if (category.audios != undefined && category.audios.length > 0) {
                showPleaseWait();
                var updateTimings = false;
                var start = 0;
                var firstLoadNo = -1;
                playAudioItem = audio;
                resetAudioTimings = false;
                for (var x = 0; x < playListAudioSourceList.length; x++) {
                    if (updateTimings === true) {
                        break;
                    }
                    currentTrack = currentAudioTracks[x];
                    firstLoadNo = x;
                    start += currentTrack.duration;
                    if (currentTrack.loadedreset === false || currentTrack.duration === 0) {
                        updateTimings=true;
                        if (device.platform !== "Android") {
                            resetAudioTimings = true;
                        }
                        setDurMedia(category, firstLoadNo, function() {});
                    } else {
                        if (start !== currentTrack.end) {
                            updateTimings=true;
                            if (device.platform !== "Android") {
                                resetAudioTimings = true;
                            }
                            setDurMedia(category, firstLoadNo, function() {});
                        }
                    }
                }
                if (resetAudioTimings === false) {
                    audioMixFirstLoadTime = false;
                    loadingAudioMix = true;
                    audioAudioPlayer3.setSrc(category.audiomixurl);
                    audioAudioPlayer3.load();
                    setTimeout(function() {
                               playAudioAudio(audio, category, true);
                               }, 600);
                }
            }
        } else {
            if (nextAudioUrl !== undefined && nextAudioUrl.length > 0 && audioplayerIndex1 != currentAudioPlaylistNo) {
                $("#audioplayerdiv1 .mejs-time span.mejs-currenttime").html("00:00");
                $("#audioplayerdiv1 .mejs-time span.mejs-duration").html(audio.length);
                $("#audioplayerdiv1 .mejs-time-current").css("width", 0);
                $("#audioplayerdiv1 .mejs-time-handle").css("width", 0);
                $("#audioplayerdiv1 .mejs-time-handle").css("left", 0);
                $("#audioplayerdiv1 .mejs-time-loaded").css("width", 0);
                $("#audioplayerdiv1 .mejs-time-float").css("display", "none");
            }
            if (audioMixLoaded === true) {
                audioPlayer1Play = false;
                audioplayerIndex1 = currentAudioPlaylistNo;
                var currentTrack = currentAudioTracks[audioplayerIndex1];
                if (audioMixPlaying === false) {
                    resetAudio3Timing = currentTrack.start;
                    audioAudioPlayer1.pause();
                    $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                    audioAudioPlayer3.pause();
                    audioAudioPlayer3.play();
                    audioAudioPlayer3.pause();
                    audioAudioPlayer3.setCurrentTime(currentTrack.start);
                    setTimeout(function() {
                               audioAudioPlayer3.setCurrentTime(currentTrack.start);
                               audioAudioPlayer3.play();
                               },600);
                    
                    
                } else {
                    if (updateplayer === true) {
                        audioAudioPlayer3.setCurrentTime(currentTrack.start);
                    }
                }
                
                audioAudioPlayer1.pause();
                audioAudioPlayer1.setSrc(nextAudioUrl);
                var player = "#audioplayerdiv1";
                var t = audioAudioPlayer1,
                total = $(player + " .mejs-time-total"),
                loaded = $(player + " .mejs-time-loaded"),
                current = $(player + " .mejs-time-current"),
                handle = $(player + " .mejs-time-handle"),
                trackduration = currentAudioTracks[audioplayerIndex1].duration,
                trackposition = audioAudioPlayer3.media.currentTime - currentAudioTracks[audioplayerIndex1].start,
                handleMouseMove = function(e) {
                    var x = e.pageX,
                    offset = total.offset(),
                    width = total.outerWidth(true),
                    percentage = 0,
                    newTime = 0,
                    pos = 0;
                    if (trackduration > 0) {
                        if (x < offset.left) {
                            x = offset.left;
                        } else {
                            if (x > width + offset.left) {
                                x = width + offset.left;
                            }
                        }
                        pos = x - offset.left;
                        percentage = (pos / width);
                        newTime = (percentage <= 0.02) ? 0 : percentage * trackduration;
                        if (mouseIsDown === true && newTime !== trackposition && newTime < (trackduration - 0.25)) {
                            audioPlayerPositionSet = true;
                            setProgressRail(newTime, trackduration);
                            audioPlayerPositionSetTime = newTime;
                        }
                    }
                },
                mouseIsDown = false,
                mouseIsOver = false;
                total.off("mousedown");
                total.off("mouseenter");
                total.off("touchmove");
                total.off("mouseleave");
                total.on("mousedown", function(e) {
                         if (e.which === 1) {
                         mouseIsDown = true;
                         handleMouseMove(e);
                         t.globalBind("mousemove.dur", function(e) {
                                      handleMouseMove(e);
                                      });
                         t.globalBind("mouseup.dur", function(e) {
                                      mouseIsDown = false;
                                      t.globalUnbind(".dur");
                                      });
                         return false;
                         }
                         }).on("mouseenter", function(e) {
                               mouseIsOver = true;
                               t.globalBind("mousemove.dur", function(e) {
                                            handleMouseMove(e);
                                            });
                               }).on("touchmove", function(e) {
                                     mouseIsOver = true;
                                     mouseIsDown = true;
                                     var x = e.originalEvent.touches[0].pageX,
                                     offset = total.offset(),
                                     width = (total.outerWidth(true) - 25),
                                     percentage = 0,
                                     newTime = 0,
                                     pos = 0;
                                     if (trackduration > 0) {
                                     if (x < offset.left) {
                                     x = offset.left;
                                     } else {
                                     if (x > width + offset.left) {
                                     x = width + offset.left;
                                     }
                                     }
                                     pos = x - offset.left;
                                     percentage = (pos / width);
                                     if (percentage === 1) {
                                     percentage = 0.99;
                                     }
                                     newTime = (percentage <= 0.02) ? 0 : (percentage * trackduration);
                                     if (newTime !== trackposition) {
                                     audioPlayerPositionSet = true;
                                     audioPlayerPositionSetTime = newTime;
                                     setProgressRail(newTime, trackduration);
                                     }
                                     }
                                     mouseIsDown = false;
                                     }).on("mouseleave", function(e) {
                                           mouseIsOver = false;
                                           if (!mouseIsDown) {
                                           t.globalUnbind(".dur");
                                           }
                                           });
                audioAudioPlayer1.load();
                remoteArtist = audio.artist;
                remoteTitle = audio.tracktitle;
                remoteAlbum = audio.audiotitle;
                remoteImage = isDeviceOnline===true ? category.thumbnail : category.localthumbnail;
                remoteDuration = currentTrack.duration;
                remoteElapsedTime = 0;
               	if(device.platform==="Android"|| device.platform==='iOS'){
                    try{
                        params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                        window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                    }catch(e){}
                }
                setTimeout(function() {
                           $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                           }, 300);
            } else {
                audioAudioPlayer1.pause();
                if (nextAudioUrl.indexOf("http://") > -1 || nextAudioUrl.indexOf("https://") > -1) {
                    $("#audioplayerdiv1 .mejs-playpause-button button").addClass("audioloading");
                }
                
                audioplayerIndex1 = currentAudioPlaylistNo;
                audioPlayer1Play = true;
                audioAudioPlayer1.setSrc(nextAudioUrl);
                audioAudioPlayer1.load();
                var currentTrack1 = currentAudioTracks[audioplayerIndex1];
                remoteArtist = audio.artist;
                remoteTitle = audio.tracktitle;
                remoteAlbum = audio.audiotitle;
                remoteImage = isDeviceOnline===true ? category.thumbnail : category.localthumbnail;
                remoteDuration = currentTrack1.duration;
                remoteElapsedTime = 0;
               	if(device.platform==="Android"|| device.platform==='iOS'){
                    try{
                        params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                        window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                    }catch(e){}
                }
            }
            playlistActive(false, "", "");
            var currentStr = resources.nowplaying + (audio.seriesindex + 1) + ". " + audio.audiotitle + " : " + audio.tracktitle;
            if (audio.isdownloaded === false && audioMixPlaying === false && audioMixLoaded===false) {
                currentStr += " " + resources.filestreaming;
            }
            $("#podcastitemdiv-" + audio.categoryid + "-" + audio.audioid).addClass("");
            
            playlistActive(true, "#podcastitemdiv-" + audio.categoryid + "-" + audio.audioid, "audio");
            setPagePadderDiv("playlistScroller", false, "audio");
        }
        
        var getextinaudio=audio.audiopath;
        var maudext = getextinaudio.substr(getextinaudio.lastIndexOf(".") + 1);
        
    } catch (e) {
        errorHandler("playAudioAudio", e);
    }
}
function playPlaylistAudio(playlist, playlistitem, audio, category) {
    try {
        
        playAudioItem = undefined;
        
        resetAudio3Timing = 0;
        audioPlayer1Play = false;
        startFirstTrack = false;
        loadNextAudioTrack = false;
        trackUpdating = false;
        audioPlayerPositionSet = false;
        audioPlayerPositionSetTime = 0;
        //nextAudioUrl = audio.isdownloaded === false ? audio.audiopath : audio.fileuri;
        nextAudioUrl = audio.audiopath;
        currentAudioPlaylistNo = playlistitem.itemorder;
        nextAudioLoadTrackNo = playlistitem.itemorder + 1;
        if (nextAudioLoadTrackNo > playlist.playlistitems.length - 1) {
            nextAudioLoadTrackNo = 0;
        }
        var remoteUrlUsed = (nextAudioUrl.indexOf("http:") < 0 || nextAudioUrl.indexOf("https:") < 0) ? false : true;
        audioPaused = false;
        if (nextAudioUrl !== undefined && nextAudioUrl.length > 0 && audioplayerIndex1 != currentAudioPlaylistNo) {
            $("#audioplayerdiv1 .mejs-time span.mejs-currenttime").html("00:00");
            $("#audioplayerdiv1 .mejs-time span.mejs-duration").html(audio.length);
            $("#audioplayerdiv1 .mejs-time-current").css("width", 0);
            $("#audioplayerdiv1 .mejs-time-handle").css("width", 0);
            $("#audioplayerdiv1 .mejs-time-handle").css("left", 0);
            $("#audioplayerdiv1 .mejs-time-loaded").css("width", 0);
            $("#audioplayerdiv1 .mejs-time-float").css("display", "none");
        }
        
        audioAudioPlayer1.pause();
        if (nextAudioUrl.indexOf("http://") > -1 || nextAudioUrl.indexOf("https://") > -1) {
            $("#audioplayerdiv1 .mejs-playpause-button button").addClass("audioloading");
        }
        
        audioplayerIndex1 = currentAudioPlaylistNo;
        audioPlayer1Play = true;
        audioAudioPlayer1.setSrc(nextAudioUrl);
        audioAudioPlayer1.load();
        setRemoteControlsForPlaylist(category, audio, function(){});
        
        playlistActive(false, "", "");
        var currentStr = resources.nowplaying + (playlistitem.itemorder + 1) + ". " + audio.audiotitle + " : " + audio.tracktitle;
        if (audio.isdownloaded === false) {
            currentStr += " " + resources.filestreaming;
        }
        playlistActive(true, "#podcastitemdiv-" + playlistitem.userplaylistid + "-" + playlistitem.playlistitemid, "audio");
        setPagePadderDiv("playlistScroller", false, "audio");
        
    } catch (e) {
        errorHandler("playPlaylistAudio", e);
    }
}
function getVideosForUser(videoInit, returnFunction) {
    try {
        if (getUserVideosOk === true) {
            getUserVideosOk = false;
            var contentHeight = 0;
            var libraryId = videoLibraryID;
            activeUser.getUserVideos(libraryId, videoInit, function(ret) {
                                     if (ret == undefined || ret.length == 0) {
                                     $("#novideopodcastdiv").html(resources.noavailablevideos);
                                     $("#novideopodcastdiv").show();
                                     } else {
                                     $("#novideopodcastdiv").html(resources.noavailablevideos);
                                     $("#novideopodcastdiv").hide();
                                     $("#videocategories").html(ret);
                                     $("#videocategories").trigger("create");
                                     $("#videocategories").listview();
                                     setTimeout(function() {setPagePadderDiv("videoPodcastScroller", true);},1200);
                                     setTimeout(function() {
                                                $(".videocategorymedia").off("vclick");
                                                $(".videocategorymedia").on("vclick", function(event) {
                                                                            try {
                                                                            if (medialistingOK === true) {
                                                                            medialistingOK = false;
                                                                            event.preventDefault();
                                                                            var id = $(event.currentTarget).attr("id");
                                                                                var current = $(this).closest(".ui-collapsible");
                                                                            if ($(this).hasClass("ui-collapsible-collapsed") === true) {
                                                                                $(".ui-collapsible").not(".ui-collapsible-collapsed").find("ui-collapsible-heading-toggle").click();
                                                                                $(".ui-collapsible-content", current).slideDown(300);
                                                                                $(this).collapsible("expand");
                                                                            setTimeout(function() {
                                                                                       medialistingOK = true;
                                                                                       setPagePadderDiv("videoPodcastScroller", false);
                                                                                       }, 300);
                                                                            } else {
                                                                                $(".ui-collapsible-content", current).slideUp(300);
                                                                                setTimeout(function() {
                                                                                $("#" + id).collapsible("collapse");
                                                                                }, 300);
                                                                            
                                                                            setTimeout(function() {
                                                                                       medialistingOK = true;
                                                                                       setPagePadderDiv("videoPodcastScroller", false);
                                                                                       }, 300);
                                                                            }
                                                                            }
                                                                            } catch (e) {
                                                                            errorHandler("videocategorymedia", e);
                                                                            }
                                                                            });
                                                setPagePadderDiv("videoPodcastScroller", true);
                                                }, 300);
                                     setVideoSeriesBtn();
                                     }
                                     
                                     setTimeout(function() {
                                                getUserVideosOk = true;
                                                setPagePadderDiv("videoPodcastScroller", true);
                                                }, 300);
                                     returnFunction(true);
                                     });
        } else {
            returnFunction(true);
        }
    } catch (e) {
        errorHandler("getVideosForUser", e);
        getUserVideosOk = true;
        returnFunction(false);
    }
}
function getAudiosForUser(audioInit, returnFunction) {
    try {
        if (getUserAudioOk === true) {
            getUserAudioOk = false;
            var contentHeight = 0;
            activeUser.getUserAudios(audioInit, function(ret) {
                                     if (ret === undefined || ret.length === 0) {
                                     $("#noaudiopodcastdiv").html(resources.noavailableaudios);
                                     $("#noaudiopodcastdiv").show();
                                     } else {
                                     
                                     setTimeout(function(){
                                     $("#noaudiopodcastdiv").html(resources.noavailableaudios);
                                     $("#noaudiopodcastdiv").hide();
                                     $("#audiocategories").html(ret);
                                     $("#audiocategories").trigger("create");
                                     $("#audiocategories").listview();
                                     hidePleaseWait();
                                     // Set up any playlists
                                     //checkPlaylistUpdates(false, function(){
                                     
                                     activeUser.getStoredFilesListAsync("userplaylists", audioInit, function(ret) {
                                                                        
                                                                        setTimeout(function() {
                                                                                   getPlaylistsForUser(audioInit, function(ret){
                                                                                                       ignoreWarnings = false;
                                                                                                       });
                                                                                   
                                                                                   
                                                                                  // setTimeout(function(){
                                                                                              if(deviceIsOnline==true)
                                                                                              {
                                                                                              
                                                                                              activeUser.saveFilesList(undefined, "audiocategories", true, function() {});
                                                                                              activeUser.saveFilesList(undefined, "userplaylists", true, function() {});
                                                                                              
                                                                                              }
                                                                                              
                                                                                              //},100);
                                                                                   
                                                                                 
                                                                                   }, 600);
                                                                        
                                                                        });
                                     
                                     //});
                                     setTimeout(function() {
                                                setPagePadderDiv("audioPodcastScroller", true);
                                                }, 600);
                                     setTimeout(function() {
                                                $(".audiocategorymedia").off("vclick");
                                                $(".audiocategorymedia").on("vclick", function(event) {
                                                                            try {
                                                                            if (medialistingOK === true) {
                                                                            medialistingOK = false;
                                                                            event.preventDefault();
                                                                            var id = $(event.currentTarget).attr("id");
                                                                                var current = $(this).closest(".ui-collapsible");
                                                                            if ($(this).hasClass("ui-collapsible-collapsed") === true) {
                                                                            //$(this).trigger("expand");
                                                                                $(".ui-collapsible").not(".ui-collapsible-collapsed").find("ui-collapsible-heading-toggle").click();
                                                                                $(".ui-collapsible-content", current).slideDown(300);
                                                                            $(this).collapsible("expand");
                                                                            setTimeout(function() {
                                                                                       medialistingOK = true;
                                                                                       setPagePadderDiv("audioPodcastScroller", false);
                                                                                       }, 300);
                                                                            } else {
                                                                            //  $("#" + id).trigger("collapse");
                                                                                $(".ui-collapsible-content", current).slideUp(300);
                                                                            
                                                                                setTimeout(function() {
                                                                                $("#" + id).collapsible("collapse");
                                                                                }, 300);
                                                                            setTimeout(function() {
                                                                                       medialistingOK = true;
                                                                                       setPagePadderDiv("audioPodcastScroller", false);
                                                                                       }, 300);
                                                                            }
                                                                            }
                                                                            } catch (e) {
                                                                            errorHandler("podmediacollapsible", e);
                                                                            }
                                                                            });
                                                }, 600);
                                     setAudioSeriesBtn();
                                     }, 3000);}
                                     setTimeout(function() {
                                                getUserAudioOk = true;
                                                }, 600);
                                     returnFunction(true);
                                     });
        } else {
            returnFunction(true);
        }
    } catch (e) {
        errorHandler("getAudiosForUser", e);
        getUserAudioOk = true;
        returnFunction(false);
    }
}
function getPlaylistsForUser(audioInit, returnFunction) {
    try {
        if (getUserPlaylistOk === true) {
            getUserPlaylistOk = false;
            var contentHeight = 0;
            activeUser.getUserPlaylists(audioInit, function(ret) {
                                        if (ret === undefined || ret.length === 0) {
                                        hidePleaseWait();
                                        $("#nouserplaylistdiv").html(resources.noplaylistdiv);
                                        $("#nouserplaylistdiv").show();
                                        } else {
                                        
                                        $("#nouserplaylistdiv").hide();
                                        $("#userplaylistcategories").html(ret);
                                        $("#userplaylistcategories").trigger("create");
                                        $("#userplaylistcategories").listview();
                                        
                                        setTimeout(function() {
                                                   setPagePadderDiv("userPlaylistScroller", true);
                                                   }, 600);
                                        setPlaylistSeriesBtn();
                                        }
                                        getUserPlaylistOk=true;
                                        returnFunction(true);
                                        });
            
            returnFunction(true);
        } else {
            returnFunction(true);
        }
        setTimeout(function() {
                   getUserPlaylistOk = true;
                   
                   }, 600);
    } catch (e) {
        errorHandler("getPlaylistsForUser", e);
        getUserPlaylistOk = true;
        returnFunction(false);
    }
}

function setPlaylistSeriesBtn() {
    try {
        $("#footerplaylistbtn").removeClass("addplaylistitem");
        $("#footerplaylistbtn").addClass("addplaylist");
        
        $(".playlistseriesbtn").off("vclick");
        $(".playlistseriesbtn").on("vclick", function(event) {
                                   try {
                                   if (mediaSeriesBtnOk === true) {
                                   setPagePadderDiv("userPlaylistScroller", true);
                                   setPagePadderDiv("audioPodcastScroller", true);
                                   setPagePadderDiv("videoPodcastScroller", true);
                                   
                                   mediaSeriesBtnOk = false;
                                   
                                   $("#footerplaylistselbtn").removeClass("editmode");
                                   $(".playlistuldiv").removeClass("editmode");
                                   $("#playlisttitlepopup").hide();
                                   $("#playlistitemtitlepopup").hide();
                                   $("#playlistheader").html("");
                                   var id = $(event.currentTarget).attr("id");
                                   
                                   $("#audioplaycontainerdiv").show();
                                   $("#videoplaycontainerdiv").hide();
                                   currentPlayListCategory = id;
                                   var ids = id.split("-");
                                   var playlistId = ids[1];
                                   $("#podextramenupanel").panel("close");
                                   event.preventDefault();
                                   audioplayerIndex1 = 0;
                                   nextAudioLoadTrackNo = 1;
                                   startFirstTrack = true;
                                   $("#podcategoryul").empty();
                                   $("#podcategoryul").addClass("playlistsortable");
                                   playlistActive(false, "", "");
                                   playAudioOk = true;
                                   if (audioAudioPlayer1 != undefined) {
                                   audioAudioPlayer1.pause();
                                   }
                                   
                                   if (activeUser.userplaylists !== undefined && activeUser.userplaylists.length === 0) {
                                   if (activeUser.existPlaylists !== undefined && activeUser.existPlaylists.length > 0) {
                                   activeUser.userplaylists = activeUser.existPlaylists;
                                   }
                                   }
                                   currentPlaylist = activeUser.getPlaylistById(playlistId);
                                   if (currentPlaylist !== undefined) {
                                   
                                   var playlistTitle = currentPlaylist.title;
                                   $("#playlistheader").html(playlistTitle);
                                   currentPlaylist.getPlaylistLi(function(ret) {
                                                                 var title = currentPlaylist.title;
                                                                 var firstAudioItem;
                                                                 $("#podcategoryul").html(ret);
                                                                 $("#playlistdiv").trigger("refresh");
                                                                 $("#podcategoryul").trigger("create");
                                                                 $("#podcategoryul").listview();
                                                                 $("#podcategoryul").listview("refresh");
                                                                 var itemId = currentPlaylist.userplaylistid;
                                                                 if (currentPlaylist.userplaylistid===0 && currentPlaylist.userplaylistid.tempid > 0){
                                                                 itemId = "temp" + currentPlaylist.userplaylistid.tempid;
                                                                 }
                                                                 
                                                                 $("#podcastitemdiv-" + itemId).show();
                                                                 
                                                                 $(".playlistinfodiv").off("vclick");
                                                                 $(".playlistinfodiv").on("vclick", function(event) {
                                                                                          try{
                                                                                          event.preventDefault();
                                                                                          msgStr = resources.downloadplaylistinfo;
                                                                                          msgTitle = resources.downloadallaudios;
                                                                                          msgBtnValue = resources.btnOk;
                                                                                          navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                                                                          } catch (e) {
                                                                                          errorHandler("playlistinfodiv", e);
                                                                                          }
                                                                                          });
                                                                 $("#audioplayerdiv1").empty();
                                                                 $("#audioplayerdiv3").empty();
                                                                 
                                                                 nextAudioUrl = "";
                                                                 currentAudioPlaylistNo=0;
                                                                 audioFirstPlay = true;
                                                                 if (currentPlaylist.playlistitems != undefined && currentPlaylist.playlistitems.length > 0) {
                                                                 
                                                                 var playlistItem = currentPlaylist.playlistitems[0];
                                                                 if(playlistItem!==undefined){
                                                                 var categoryRef = playlistItem.categoryref;
                                                                 var audioId = playlistItem.audioid + "mp3";
                                                                 if(categoryRef!==undefined && categoryRef.length > 0){
                                                                 var idsPl = categoryRef.split("-");
                                                                 var tabid = idsPl[0];
                                                                 var audiocategoryid = idsPl[1] + "-" + idsPl[2];
                                                                 var category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                                                                 if (category !== undefined) {
                                                                 var audio = category.getAudioItemById(audioId);
                                                                 if(audio!==undefined){
                                                                 firstAudioItem = audio;
                                                                 nextAudioUrl = audio.fileuri!==undefined && audio.fileuri.length > 0 ? audio.fileuri : audio.audiopath;
                                                                 }
                                                                 }
                                                                 
                                                                 
                                                                 }
                                                                 }
                                                                 
                                                                 
                                                                 var params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                 var tag = '<audio id="audioplayer1" class="audioplayer" controls="controls" preload="auto"><source type="audio/mpeg" src=""></audio>';
                                                                 $("#audioplayerdiv1").html(tag);
                                                                 audioAudioPlayer1 = new MediaElementPlayer("#audioplayer1", {
                                                                                                            iPadUseNativeControls: false,
                                                                                                            iPhoneUseNativeControls: false,
                                                                                                            AndroidUseNativeControls: false,
                                                                                                            pauseOtherPlayers: false,
                                                                                                            features: ["playpause", "progress", "current", "duration"],
                                                                                                            success: function(audpay, node) {
                                                                                                            audpay.addEventListener("loadedmetadata", function(e) {
                                                                                                                                    if (((e.target !== null) && e.target.duration === 100 || e.target.duration === 0) && audioplayerIndex1 !== undefined) {
                                                                                                                                    $("#audioplayerdiv1 .mejs-time span.mejs-duration").html(currentPlaylist.playlistitems[audioplayerIndex1].length);
                                                                                                                                    }
                                                                                                                                    if(audioPlayer1Play===true){
                                                                                                                                    audioPlayer1Play = false;
                                                                                                                                    audpay.play();
                                                                                                                                    }
                                                                                                                                    }, false);
                                                                                                            addEventListener("playing", function(e) {
                                                                                                                             audioplaying=true;
                                                                                                                             }, false);
                                                                                                            audpay.addEventListener("timeupdate", function(e) {
                                                                                                                                    if (e.target.duration > 0.5) {
                                                                                                                                    if (e.target.currentTime >= (e.target.duration - 0.15)) {
                                                                                                                                    audioPaused = false;
                                                                                                                                    
                                                                                                                                    var playlistItem = currentPlaylist.playlistitems[nextAudioLoadTrackNo];
                                                                                                                                    if(playlistItem!==undefined){
                                                                                                                                    var categoryRef = playlistItem.categoryref;
                                                                                                                                    var audioId = playlistItem.audioid + "mp3";
                                                                                                                                    if(categoryRef!==undefined && categoryRef.length > 0){
                                                                                                                                    var idsPl = categoryRef.split("-");
                                                                                                                                    var tabid = idsPl[0];
                                                                                                                                    var audiocategoryid = idsPl[1] + "-" + idsPl[2];
                                                                                                                                    var category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                                                                                                                                    if (category !== undefined) {
                                                                                                                                    var audio = category.getAudioItemById(audioId);
                                                                                                                                    playPlaylistAudio(currentPlaylist, playlistItem, audio, category);
                                                                                                                                    }
                                                                                                                                    }
                                                                                                                                    }
                                                                                                                                    }
                                                                                                                                    }
                                                                                                                                    }, false);
                                                                                                            audpay.addEventListener("play", function(e) {
                                                                                                                                    $("#audioplayerdiv1 .mejs-playpause-button button").removeClass("audioloading");
                                                                                                                                    $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                                                                    audioPaused = false;
                                                                                                                                    audioplaying=true;
                                                                                                                                    if(appPaused===true){
                                                                                                                                    try{
                                                                                                                                    if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                                    params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                                    
                                                                                                                                    window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                                    }
                                                                                                                                    }catch(e){}
                                                                                                                                    }
                                                                                                                                    if (audioFirstPlay === true) {
                                                                                                                                    audioFirstPlay = false;
                                                                                                                                    
                                                                                                                                    var currentaudioItem = currentPlaylist.playlistitems[currentAudioPlaylistNo];
                                                                                                                                    playlistActive(false, "", "");
                                                                                                                                    
                                                                                                                                    var className = "#podcastitemdiv-" + currentPlaylist.userplaylistid + "-" + currentaudioItem.itemorder ;
                                                                                                                                    playlistActive(true, className, "audio");
                                                                                                                                    
                                                                                                                                    }
                                                                                                                                    }, false);
                                                                                                            audpay.addEventListener("pause", function(e) {
                                                                                                                                    audioplaying=false;
                                                                                                                                    if( appPaused===true){
                                                                                                                                    try{
                                                                                                                                    if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                                    params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                                    window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                                    
                                                                                                                                    }
                                                                                                                                    }catch(e){}
                                                                                                                                    }
                                                                                                                                    
                                                                                                                                    setTimeout(function() {
                                                                                                                                               if (audioPaused === false && appPaused===false) {
                                                                                                                                               
                                                                                                                                               audpay.play();
                                                                                                                                               }
                                                                                                                                               }, 1600);
                                                                                                                                    }, false);
                                                                                                            audpay.addEventListener("ended", function(e) {
                                                                                                                                    audioplaying=false;
                                                                                                                                    audioPaused = false;
                                                                                                                                    
                                                                                                                                    }, false);
                                                                                                            
                                                                                                            
                                                                                                            audioPlayer1Play = false;
                                                                                                            audioplayerIndex1 = 0;
                                                                                                            nextAudioLoadTrackNo = 1;
                                                                                                            audioPlayerFirstLoad = true;
                                                                                                            if (nextAudioUrl !== undefined && nextAudioUrl.length > 0) {
                                                                                                            audpay.pause();
                                                                                                            
                                                                                                            loadNextAudioTrack = true;
                                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                                            audpay.load();
                                                                                                            }
                                                                                                            }
                                                                                                            });
                                                                 }
                                                                 
                                                                 $(".audioplayer .mejs-play").off("vclick");
                                                                 $(".audioplayer .mejs-play").on("vclick", function(event) {
                                                                                                 try {
                                                                                                 if (mejsOk === true) {
                                                                                                 mejsOk = false;
                                                                                                 var triggerId;
                                                                                                 audioPlayerPositionSet = false;
                                                                                                 audioPlayerPositionSetTime = 0;
                                                                                                 
                                                                                                 event.preventDefault();
                                                                                                 if ($(this).hasClass("mejs-pause")) {
                                                                                                 audioPaused = true;
                                                                                                 $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                                 audioAudioPlayer1.pause();
                                                                                                 } else {
                                                                                                 audioPaused = false;
                                                                                                 
                                                                                                 $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                                 
                                                                                                 audioAudioPlayer1.play();
                                                                                                 
                                                                                                 }
                                                                                                 setTimeout(function() {
                                                                                                            mejsOk = true;
                                                                                                            }, 300);
                                                                                                 }
                                                                                                 } catch (e) {
                                                                                                 errorHandler("mejs vclick", e);
                                                                                                 }
                                                                                                 });
                                                                 });
                                   }
                                   setPlaylistItemSelectBtn();
                                   setPlaylistItemAddBtn();
                                   
                                   setPlayListAudiosBtn();
                                   setDownloadAudioBtn();
                                   setDownloadAllPlaylistBtn();
                                   setDeleteAllPlaylistBtn();
                                   setTimeout(function() {
                                              $("#tabcontainer").addClass("plshowing");
                                              $("#podcastpagehead").addClass("headerhide");
                                              $("#footerbarleftbckbtn").show();
                                              
                                              $("#podcastpage").removeClass("categorylistview");
                                              $("#mediamaincontent").addClass("playlistviewtab");
                                              $("#mediamaincontent").removeClass(currentTab);
                                              $("#playlisttab").show();
                                              //$("div.flipper").css("transform", "rotateY(-180deg)");
                                       
                                       $("#userplaylisttab").css("transform", "scaleX(0)");
                                       $("#playlisttab").css("transform", "scaleY(1)");
                                              $("html,body").animate({
                                                                     scrollTop: 0
                                                                     }, 100);
                                              setPagePadderDiv("playlistScroller", true, "");
                                              if(currentPlaylist!==undefined){
                                              setUserMediaPosition("userplaylist", currentPlaylist.userplaylistid.toString(), "", "");
                                              }
                                              setPagePadderDiv("playlistScroller", true, "audio");
                                              mediaSeriesBtnOk=true;
                                              if(currentPlaylist!==undefined && currentPlaylist.playlistitems !== undefined && currentPlaylist.playlistitems.length===0){
                                              setTimeout(function(){
                                                         $(".addplaylistitem").trigger("vclick");
                                                         },300);
                                              }
                                              }, 300);
                                   
                                   event.stopPropagation();
                                   /*if(deviceIsOnline==true)
                                   {
                                   checkPlaylistUpdates(true, function(){});
                                   activeUser.saveFilesList(undefined, "audiocategories", true, function() {});
                                   activeUser.saveFilesList(undefined, "userplaylists", true, function() {});
                                   }*/
                                   saveFilesListAll();
                                   //checkPlaylistUpdates(true,function(){mediaSetRefresh();});
                                   //$("#podrefreshbtn").trigger("vclick");
                                   }
                                   } catch (e) {
                                   errorHandler("playlistseriesbtn vclick", e);
                                   mediaSeriesBtnOk=true;
                                   }
                                   });
    } catch (e) {
        errorHandler("setPlaylistSeriesBtn", e);
        mediaSeriesBtnOk = true;
        returnFunction(false);
    }
}
function setVideoSeriesBtn() {
    try {
        $(".videoseriesbtn").off("vclick");
        $(".videoseriesbtn").on("vclick", function(event) {
                                try {
                                if (mediaSeriesBtnOk === true) {
                                setPagePadderDiv("videoPodcastScroller", true);
                                mediaSeriesBtnOk = false;
                                //$("#videostab").css("display","none");
                                saveFilesListAll();
                                $("#playlisttitlepopup").hide();
                                $("#playlistitemtitlepopup").hide();
                                $("#playlistheader").html("");
                                var id = $(event.currentTarget).attr("id");
                                var ids = id.split("-");
                                var tabId = ids[1];
                                var catId = ids[2];
                                var seriesId = ids[3];
                                currentPlayListCategory = id;
                                $("#podextramenupanel").panel("close");
                                event.preventDefault();
                                $("#podcategoryul").empty();
                                $("#podcategoryul").removeClass("playlistsortable");
                                $("#podcategoryul").removeClass("ui-sortable");
                                $(".mejs-controls").removeClass("etpaudio");
                                $(".footerbarplaylistli").addClass('nodisplay');
                                    $("#mediafooter").addClass("nodisplayimp")
                                $(".footerbarplaylistselli").addClass('nodisplay');
                                $("#footerplaylistselbtn").removeClass('nodisplay');
                                
                                hideVideoPlayer();
                                $("#videoplayerhide").hide();
                                videoPlayerPlay = false;
                                if (activeUser.videocategories !== undefined && activeUser.videocategories.length === 0) {
                                if (activeUser.existVids !== undefined && activeUser.existVids.length > 0) {
                                activeUser.videocategories = activeUser.existVids;
                                }
                                }
                                var category = activeUser.getVideocategoryById(tabId, catId, seriesId);
                                $("#audioplaycontainerdiv").hide();
                                
                                if (category !== undefined) {
                                var categoryTitle = category.category;
                                category.getVideoCategoryLi("videocategories",function(ret) {
                                                            var title = (categoryTitle.length > 70) ? categoryTitle.substring(0, 66) + " ..." : categoryTitle;
                                                            var titleSingleLine = title.length > 38 ? false : true;
                                                            if (titleSingleLine === true) {
                                                            $("#playlistheader").addClass("titlesingleline");
                                                            } else {
                                                            $("#playlistheader").removeClass("titlesingleline");
                                                            }
                                                            setUserMediaPosition("video", category.tabid.toString(), category.categoryid.toString(), "");
                                                            $("#playlistheader").html(title);
                                                            $("#podcategoryul").html(ret);
                                                            $("#playlistdiv").trigger("refresh");
                                                            $("#podcategoryul").trigger("create");
                                                            $("#podcategoryul").listview();
                                                            $("#podcategoryul").listview("refresh");
                                                            
                                                            //   $("#podcategoryul").sortable("disable");
                                                            //   $("#podcategoryul").removeClass("ui-sortable");
                                                            
                                                            setPlayVideoBtn();
                                                            setDeleteVideoBtn();
                                                            setDownloadVideoBtn();
                                                            setDownloadAllVideosBtn();
                                                            setDeleteAllVideosBtn();
                                                            setViewVideoNotesBtn();
                                                            var vidUrl = "";
                                                            if (category.videos !== undefined && category.videos.length > 0) {
                                                            playListVideoSourceList = category.videos;
                                                            var video = playListVideoSourceList[0];
                                                            vidUrl = video.isdownloaded === false ? video.videopath : video.fileuri;
                                                            if (video.isdownloaded === false && (vidUrl.indexOf("http:") < 0 || vidUrl.indexOf("https:") < 0)) {
                                                            vidUrl = vidUrl;
                                                            }
                                                            $("#videoplayer").attr("src", "resources/default.mp4");
                                                            var videoPosterImg = tablet === true ? "css/client/images/videoposter.png" : "css/client/images/videoposter1.png";
                                                            var vidtag = '<video id="videoplayer" class="videoplayer"  poster="' + videoPosterImg + '" preload="metadata" src="resources/default.mp4" type="video/mp4"></video>';
                                                            $("#videoplayerdiv").html(vidtag);
                                                            if (device.platform !== "Android") {
                                                            videoVideoPlayer = new MediaElementPlayer("#videoplayer", {
                                                                                                      iPadUseNativeControls: false,
                                                                                                      iPhoneUseNativeControls: false,
                                                                                                      AndroidUseNativeControls: false,
                                                                                                      pauseOtherPlayers: true,
                                                                                                      alwaysShowControls: true,
                                                                                                      features: ["playpause", "progress", "current", "duration", "fullscreen"],
                                                                                                      success: function(vidpay, node) {
                                                                                                      vidpay.addEventListener("ended", function(e) {
                                                                                                                              videoPaused = true;
                                                                                                                              videoPlayNext(e.target);
                                                                                                                              }, false);
                                                                                                      vidpay.addEventListener("loadedmetadata", function(e) {
                                                                                                                              $("#videoplayerdiv .mejs-playpause-button button").removeClass("audioloading");
                                                                                                                              $(".videoplayer .mejs-overlay-loading").show();
                                                                                                                              if (videoPlayerPlay === true) {
                                                                                                                              videoPlayerPlay = false;
                                                                                                                              vidpay.play();
                                                                                                                              }
                                                                                                                              }, false);
                                                                                                      vidpay.addEventListener("timeupdate", function(e) {}, false);
                                                                                                      vidpay.addEventListener("pause", function(e) {
                                                                                                                              if (videoPaused === false) {
                                                                                                                              $(".videoplayer .mejs-overlay-loading").show();
                                                                                                                              /* setTimeout(function() {
                                                                                                                               if (videoPaused === false) {
                                                                                                                               vidpay.play();
                                                                                                                               }
                                                                                                                               }, 10000);
                                                                                                                               */
                                                                                                                              }
                                                                                                                              }, false);
                                                                                                      vidpay.addEventListener("play", function(e) {
                                                                                                                              $(".videoplayer .mejs-overlay-loading").hide();
                                                                                                                              $("#videoplayerdiv .mejs-playpause-button button").removeClass("audioloading");
                                                                                                                              videoPaused = false;
                                                                                                                              videoPlayerPlay = false;
                                                                                                                              var videoPlaylistItem = playListVideoSourceList[currentVideoPlaylistNo];
                                                                                                                              
                                                                                                                              }, false);
                                                                                                      if (vidUrl !== undefined && vidUrl.length > 0) {
                                                                                                      //vidpay.setSrc(vidUrl);
                                                                                                      vidpay.load();
                                                                                                      }
                                                                                                      }
                                                                                                      });
                                                            } else {
                                                            videoVideoPlayer = document.getElementById("videoplayer");
                                                            }
                                                            if (tablet === false) {
                                                            var vidPlayer3 = document.getElementById("videoplayer");
                                                            if (vidPlayer3 !== undefined) {
                                                            vidPlayer3.addEventListener("webkitendfullscreen", function() {
                                                                                        
                                                                                        videoPlayerPlay = false;
                                                                                        videoPaused = true;
                                                                                        videoVideoPlayer.pause();
                                                                                        videoVideoPlayer.setSrc("");
                                                                                        if (tablet === false) {
                                                                                        $("#videoplaycontainerdiv").hide();
                                                                                        }
                                                                                        setPagePadderDiv("playlistScroller", false, "video");
                                                                                        }, false);
                                                            }
                                                            }
                                                            $(".videoplayer .mejs-play").off("vclick");
                                                            $(".videoplayer .mejs-play").on("vclick", function(event) {
                                                                                            try {
                                                                                            if ($(this).hasClass("mejs-pause")) {
                                                                                            videoPaused = true;
                                                                                            } else {
                                                                                            videoPaused = false;
                                                                                            }
                                                                                            } catch (e) {
                                                                                            errorHandler("mejs vclick", e);
                                                                                            }
                                                                                            });
                                                            }
                                                            setTimeout(function() {
                                                                       $("#tabcontainer").addClass("plshowing");
                                                                       $("#footerbarleftbckbtn").show();
                                                                       $("#podcastpagehead").addClass("headerhide");
                                                                       $("#podcastpage").removeClass("categorylistview");
                                                                       $("#mediamaincontent").addClass("playlistviewtab");
                                                                       $("#mediamaincontent").removeClass(currentTab);
                                                                       $("#playlisttab").show();
                                                                       //$("div.flipper").css("transform", "rotateY(-180deg)");
                                                                $("#videostab").css("transform", "scaleX(0)");
                                                                $("#playlisttab").css("transform", "scaleY(1)");
                                                                
                                                                       $("html,body").animate({
                                                                                              scrollTop: 0
                                                                                              }, 300);
                                                                       setPagePadderDiv("playlistScroller", true, "video");
                                                                       
                                                                       setPagePadderDiv("playlistScroller", true, "video");
                                                                       setTimeout(function(){ 
                                                                          // $("#videostab").css("display","none"); 
                                                                           
                                                                       },300)
                                                                       }, 300);
                                                            });
                                }
                                }
                                event.stopPropagation();
                                } catch (e) {}
                                setTimeout(function() {
                                           mediaSeriesBtnOk = true;
                                           }, 300);
                                });
        
        $("#btnvidplayerhide").off("vclick");
        $("#btnvidplayerhide").on("vclick", function(event) {
                                  try {
                                  event.preventDefault();
                                  if (device.platform !== "Android") {
                                  $("#videoplaycontainerdiv").hide(200);
                                  var containertype = tablet === true ? "video" : "video";
                                  setTimeout(function() {
                                             setPagePadderDiv("playlistScroller", true, containertype);
                                             }, 300);
                                  }
                                  } catch (e) {
                                  errorHandler("videoplayerhide vclick", e);
                                  }
                                  });
        setTimeout(function() {setPagePadderDiv("videoPodcastScroller", false);},600);
    } catch (e) {
        errorHandler("setVideoSeriesBtn", e);
    }
}
function setAudioSeriesBtn() {
    try {
        $(".audioseriesbtn").off("vclick");
        $(".audioseriesbtn").on("vclick", function(event) {
                                try {
                                if (mediaSeriesBtnOk === true) {
                                setPagePadderDiv("userPlaylistScroller", true);
                                setPagePadderDiv("audioPodcastScroller", true);
                                setPagePadderDiv("videoPodcastScroller", true);
                                
                                mediaSeriesBtnOk = false;
                                
                                $("#playlisttitlepopup").hide();
                                $("#playlistitemtitlepopup").hide();
                                $(".footerbarplaylistli").addClass('nodisplay');
                                    $("#mediafooter").addClass("nodisplayimp");
                                $(".footerbarplaylistselli").addClass('nodisplay');
                                $("#footerplaylistselbtn").removeClass('nodisplay');
                                $("#playlistheader").html("");
                                var id = $(event.currentTarget).attr("id");
                                
                                $("#audioplaycontainerdiv").show();
                                $("#videoplaycontainerdiv").hide();
                                currentPlayListCategory = id;
                                var ids = id.split("-");
                                var tabId = ids[1];
                                var catId = ids[2] + "-" + ids[3];
                                $("#podextramenupanel").panel("close");
                                audioFirstPlay = true;
                                audioPlayer1Play = false;
                                audioMixLoaded = false;
                                audioMixPlaying = false;
                                audioPlayerFirstLoad = true;
                                loadingAudioMix = false;
                                audioMixStartTrack = -1;
                                event.preventDefault();
                                currentAudioPlaylistNo = 0;
                                audioplayerIndex1 = 0;
                                audioplayerIndex3 = 0;
                                nextAudioLoadTrackNo = 1;
                                mixloading = false;
                                startFirstTrack = true;
                                $("#podcategoryul").empty();
                                $("#podcategoryul").removeClass("playlistsortable");
                                $("#podcategoryul").removeClass("ui-sortable");
                                playlistActive(false, "", "");
                                audioPlayerPositionSet = false;
                                audioPlayerPositionSetTime = 0;
                                playAudioOk = true;
                                
                                if (videoVideoPlayer != undefined) {
                                videoVideoPlayer.pause();
                                }
                                if (audioAudioPlayer1 != undefined) {
                                audioAudioPlayer1.pause();
                                }
                                if (audioAudioPlayer3 != undefined) {
                                audioAudioPlayer3.pause();
                                }
                                if (activeUser.audiocategories !== undefined && activeUser.audiocategories.length === 0) {
                                if (activeUser.existAuds !== undefined && activeUser.existAuds.length > 0) {
                                activeUser.audiocategories = activeUser.existAuds;
                                }
                                }
                                var category = activeUser.getAudiocategoryById(tabId, catId);
                                if (category !== undefined) {
                                currentAudioCategory = category;
                                var categoryTitle = category.categorytitle;
                                category.setDownloadStatus(function(){});
                                category.getAudioCategoryLi(function(ret) {
                                                            var title = (categoryTitle.length > 70) ? categoryTitle.substring(0, 66) + " ..." : categoryTitle;
                                                            var titleSingleLine = title.length > 38 ? false : true;
                                                            if (titleSingleLine === true) {
                                                            $("#playlistheader").addClass("titlesingleline");
                                                            } else {
                                                            $("#playlistheader").removeClass("titlesingleline");
                                                            }
                                                            setUserMediaPosition("audio", category.tabid.toString(), category.categoryid.toString(), "");
                                                            $("#playlistheader").html(title);
                                                            $("#podcategoryul").html(ret);
                                                            $("#playlistdiv").trigger("refresh");
                                                            $("#podcategoryul").trigger("create");
                                                            $("#podcategoryul").listview();
                                                            $("#podcategoryul").listview("refresh");
                                                            //  $("#podcategoryul").sortable("disable");
                                                            //  $("#podcategoryul").removeClass("ui-sortable");
                                                            $(".playlistinfodiv").off("vclick");
                                                            $(".playlistinfodiv").on("vclick", function(event) {
                                                                                     try{
                                                                                     event.preventDefault();
                                                                                     msgStr = resources.downloadvideoinfo;
                                                                                     msgTitle = resources.downloadallaudios;
                                                                                     msgBtnValue = resources.btnOk;
                                                                                     navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                                                                     } catch (e) {
                                                                                     errorHandler("playlistinfodiv", e);
                                                                                     }
                                                                                     });
                                                            
                                                            if (category.audios != undefined && category.audios.length > 0) {
                                                            currentAudioTracks = category.audiotracks;
                                                            audioMixFirstLoadTime = true;
                                                            audioMixLoadTrack = 0;
                                                            playListAudioSourceList = category.audios;
                                                            $("#audioplayerdiv1").empty();
                                                            $("#audioplayerdiv3").empty();
                                                            nextAudioUrl = "";
                                                            nextAudioUrl = playListAudioSourceList[0].isdownloaded === true ? playListAudioSourceList[0].fileuri : playListAudioSourceList[0].audiopath;
                                                            var audioMixUrlStr = category.audiomixurl.length > 0 ? category.audiomixurl : category.audiomixremoteurl;
                                                            if (device.platform === "Android" && playListAudioSourceList[0].isdownloaded) {
                                                            if (nextAudioUrl.indexOf("file://") === -1) {
                                                            nextAudioUrl = "file://" + nextAudioUrl;
                                                            }
                                                            if (category.audiomixurl.length > 0 && audioMixUrlStr.indexOf("file://") === -1) {
                                                            audioMixUrlStr = "file://" + audioMixUrlStr;
                                                            }
                                                            }
                                                            setDeleteAudioBtn();
                                                            setDownloadAudioBtn();
                                                            setDownloadAllAudiosBtn();
                                                            setDeleteAllAudiosBtn();
                                                            setPlayAudiosBtn();
                                                            var audioMixLoadUrl = "";
                                                            var params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                            var tag = '<audio id="audioplayer1" class="audioplayer" controls="controls" preload="auto"><source type="audio/mpeg" src=""></audio>';
                                                            $("#audioplayerdiv1").html(tag);
                                                            audioAudioPlayer1 = new MediaElementPlayer("#audioplayer1", {
                                                                                                       iPadUseNativeControls: false,
                                                                                                       iPhoneUseNativeControls: false,
                                                                                                       AndroidUseNativeControls: false,
                                                                                                       pauseOtherPlayers: false,
                                                                                                       features: ["playpause", "progress", "current", "duration"],
                                                                                                       success: function(audpay, node) {
                                                                                                       audpay.addEventListener("loadedmetadata", function(e) {
                                                                                                                               if (((e.target !== null) && e.target.duration === 100 || e.target.duration === 0) && audioplayerIndex1 !== undefined) {
                                                                                                                               $("#audioplayerdiv1 .mejs-time span.mejs-duration").html(playListAudioSourceList[audioplayerIndex1].length);
                                                                                                                               }
                                                                                                                               if (audioPlayer1Play === true) {
                                                                                                                               var audioCurrent = playListAudioSourceList[audioplayerIndex1];
                                                                                                                               var currentTrackDuration =0;
                                                                                                                               if (currentAudioTracks !== undefined && currentAudioTracks !== null &&
                                                                                                                                   currentAudioTracks[audioplayerIndex1] !== undefined){
                                                                                                                               currentTrackDuration = currentAudioTracks[audioplayerIndex1].duration;
                                                                                                                               }
                                                                                                                               
                                                                                                                              	if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                               try{
                                                                                                                               
                                                                                                                               params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                               window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                               }catch(e){}
                                                                                                                               }
                                                                                                                               audioPlayer1Play = false;
                                                                                                                               audpay.play();
                                                                                                                               }
                                                                                                                               }, false);
                                                                                                       audpay.addEventListener("timeupdate", function(e) {
                                                                                                                               if ((audioMixLoaded === false || (audioMixLoaded === true && audioMixLoadedFirstTime === true)) && e.target.duration > 0.5) {
                                                                                                                               if (e.target.currentTime >= (e.target.duration - 0.15)) {
                                                                                                                               audioMixLoadedFirstTime = false;
                                                                                                                               audioPaused = false;
                                                                                                                               playAudioAudio(playListAudioSourceList[nextAudioLoadTrackNo], category, true);
                                                                                                                               }
                                                                                                                               }
                                                                                                                               }, false);
                                                                                                       audpay.addEventListener("play", function(e) {
                                                                                                                               $("#audioplayerdiv1 .mejs-playpause-button button").removeClass("audioloading");
                                                                                                                               $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                                                               audioPaused = false;
                                                                                                                               if(appPaused===true){
                                                                                                                               try{
                                                                                                                               if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                               params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                               
                                                                                                                               window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                               }
                                                                                                                               }catch(e){}
                                                                                                                               }
                                                                                                                               if (audioFirstPlay === true) {
                                                                                                                               audioFirstPlay = false;
                                                                                                                               var currentaudioItem = playListAudioSourceList[currentAudioPlaylistNo];
                                                                                                                               playlistActive(false, "", "");
                                                                                                                               
                                                                                                                               var className = "#podcastitemdiv-" + currentaudioItem.categoryid + "-" + currentaudioItem.audioid ;
                                                                                                                               playlistActive(true, className, "audio");
                                                                                                                              	
                                                                                                                               params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                               window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                               }
                                                                                                                               }, false);
                                                                                                       audpay.addEventListener("pause", function(e) {
                                                                                                                               audioplaying=false;
                                                                                                                               if( appPaused===true){
                                                                                                                               try{
                                                                                                                               if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                               params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                               window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                               
                                                                                                                               }
                                                                                                                               }catch(e){}
                                                                                                                               }
                                                                                                                               
                                                                                                                               if (audioMixLoaded === false && audioPaused === false) {
                                                                                                                               setTimeout(function() {
                                                                                                                                          if (audioPaused === false && appPaused===false) {
                                                                                                                                          
                                                                                                                                          audpay.play();
                                                                                                                                          }
                                                                                                                                          }, 1600);
                                                                                                                               }
                                                                                                                               }, false);
                                                                                                       audpay.addEventListener("playing", function(e) {
                                                                                                                               audioplaying=true;                                                 if (currentAudioTracks !== undefined && currentAudioTracks !== null && currentAudioTracks[audioplayerIndex1].loadedreset === false) {
                                                                                                                               setTimeout(function() {
                                                                                                                                          if ((e.target !== null) && e.target.duration !== null && e.target.duration > 0) {
                                                                                                                                          resetAudioTrackDurations(category, audioplayerIndex1, e.target.duration);
                                                                                                                                          }
                                                                                                                                          }, 900);
                                                                                                                               }
                                                                                                                               }, false);
                                                                                                       audpay.addEventListener("ended", function(e) {
                                                                                                                               audioplaying=false;                                                audioPaused = false;
                                                                                                                               }, false);
                                                                                                       audioPlayer1Play = false;
                                                                                                       audioplayerIndex1 = 0;
                                                                                                       nextAudioLoadTrackNo = 1;
                                                                                                       audioPlayerFirstLoad = true;
                                                                                                       if (nextAudioUrl !== undefined && nextAudioUrl.length > 0) {
                                                                                                       audpay.pause();
                                                                                                       
                                                                                                       loadNextAudioTrack = true;
                                                                                                       $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                                       audpay.load();
                                                                                                       }
                                                                                                       }
                                                                                                       });
                                                            tag = '<audio id="audioplayer3" class="audioplayer" controls="controls" preload="auto"><source type="audio/mpeg" src=""></audio>';
                                                            $("#audioplayerdiv3").html(tag);
                                                            var currentTrack;
                                                            audioAudioPlayer3 = new MediaElementPlayer("#audioplayer3", {
                                                                                                       iPadUseNativeControls: false,
                                                                                                       iPhoneUseNativeControls: false,
                                                                                                       AndroidUseNativeControls: false,
                                                                                                       pauseOtherPlayers: false,
                                                                                                       features: ["playpause", "progress", "current", "duration"],
                                                                                                       success: function(audpay3, node) {
                                                                                                       audpay3.addEventListener("loadedmetadata", function(e) {
                                                                                                                                if (resetAudioTimings === true) {
                                                                                                                                //setTimeout(function() {
                                                                                                                                if ((e.target !== null) && e.target.duration !== null && e.target.duration > 0) {
                                                                                                                                resetAudioTrackDurations(category, audioplayerIndex3, e.target.duration);
                                                                                                                                }
                                                                                                                                var allReset = true;
                                                                                                                                var start = audioplayerIndex3;
                                                                                                                                for (var x = start; x < playListAudioSourceList.length; x++) {
                                                                                                                                var currentTrack = currentAudioTracks[x];
                                                                                                                                if (currentTrack.loadedreset === false || currentTrack.duration === 0) {
                                                                                                                                allReset = false;
                                                                                                                                audioplayerIndex3 = x;
                                                                                                                                var url = playListAudioSourceList[audioplayerIndex3].isdownloaded === true ? playListAudioSourceList[audioplayerIndex3].fileuri : playListAudioSourceList[audioplayerIndex3].audiopath;
                                                                                                                                audpay3.pause();
                                                                                                                                audpay3.setSrc(url);
                                                                                                                                audpay3.load();
                                                                                                                                break;
                                                                                                                                }
                                                                                                                                }
                                                                                                                                if (allReset === true) {
                                                                                                                                resetAudioTimings = false;
                                                                                                                                audioplayerIndex3 = 0;
                                                                                                                                audioMixFirstLoadTime = false;
                                                                                                                                loadingAudioMix = true;
                                                                                                                                hidePleaseWait();
                                                                                                                                if (category.audiomixdownloaded === true && category.audiomixurl.length > 0 && audioMixLoaded === false) {
                                                                                                                                audpay3.pause();
                                                                                                                                resetAudioTimings=false;
                                                                                                                                audpay3.setSrc(category.audiomixurl);
                                                                                                                                audpay3.load();
                                                                                                                                audioMixLoadTrack = 0;
                                                                                                                                }
                                                                                                                                }
                                                                                                                                //}, 300);
                                                                                                                                } else {
                                                                                                                                hidePleaseWait();
                                                                                                                                if ((e.target.currentSrc).indexOf("http://") === -1) {
                                                                                                                                audioMixFirstLoadTime = false;
                                                                                                                                loadingAudioMix = false;
                                                                                                                                audioMixPlaying = false;
                                                                                                                                audioMixLoaded = true;
                                                                                                                                if (playAudioItem !== undefined) {
                                                                                                                                playAudioAudio(playAudioItem, category, true);
                                                                                                                                }
                                                                                                                                } else {
                                                                                                                                audioMixPlaying = false;
                                                                                                                                audioMixLoaded = false;
                                                                                                                                }
                                                                                                                                }
                                                                                                                                }, false);
                                                                                                       audpay3.addEventListener("timeupdate", function(e) {
                                                                                                                                if (audioMixPlaying === true && trackUpdating === false) {
                                                                                                                                currentTrack = currentAudioTracks[currentAudioPlaylistNo];
                                                                                                                                var currentTimePosition = e.target.currentTime - currentTrack.start;
                                                                                                                                if ((currentTrack.end < e.target.currentTime || currentTrack.end === e.target.currentTime || e.target.duration === e.target.currentTime) && audioPlayerPositionSet === false) {
                                                                                                                                audioPlayerPositionSet = false;
                                                                                                                                trackUpdating = true;
                                                                                                                                if ((e.target !== null) && e.target.duration !== null && e.target.duration === e.target.currentTime && currentAudioPlaylistNo === currentAudioTracks.length - 1) {
                                                                                                                                audpay3.setCurrentTime(0);
                                                                                                                                }
                                                                                                                                if (nextAudioLoadTrackNo === 0) {
                                                                                                                                audpay3.pause();
                                                                                                                                } else {
                                                                                                                                playAudioAudio(playListAudioSourceList[nextAudioLoadTrackNo], category, false);
                                                                                                                                }
                                                                                                                                } else {
                                                                                                                                if (audioPlayerPositionSet === true) {
                                                                                                                                audioPlayerPositionSet = false;
                                                                                                                                var newCurrentTime = 0;
                                                                                                                                newCurrentTime = audioAudioPlayer1.getCurrentTime();
                                                                                                                                newCurrentTime = currentTrack.start + audioPlayerPositionSetTime;
                                                                                                                                if (newCurrentTime > e.target.duration) {
                                                                                                                                newCurrentTime = e.target.duration - 0.01;
                                                                                                                                }
                                                                                                                                audpay3.setCurrentTime(newCurrentTime);
                                                                                                                                } else {
                                                                                                                                if (audioAudioPlayer1 !== undefined && audioAudioPlayer1 !== null) {
                                                                                                                                var aud1Duration = (device.platform === "Android" && audioAudioPlayer1.media.duration === 0) ? currentTrack.duration : audioAudioPlayer1.media.duration;
                                                                                                                                if (aud1Duration < currentTimePosition) {
                                                                                                                                currentTimePosition = aud1Duration - 0.1;
                                                                                                                                }
                                                                                                                                if (audioAudioPlayer1.media.duration === 0) {
                                                                                                                                setProgressRail(currentTimePosition, aud1Duration);
                                                                                                                                } else {
                                                                                                                                audioAudioPlayer1.setCurrentTime(currentTimePosition);
                                                                                                                                }
                                                                                                                                }
                                                                                                                                }
                                                                                                                                }
                                                                                                                                }
                                                                                                                                }, false);
                                                                                                       audpay3.addEventListener("play", function(e) {
                                                                                                                                if(appPaused===true){
                                                                                                                                try{
                                                                                                                                params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                                window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                                
                                                                                                                                }catch(e){}                                               }
                                                                                                                                
                                                                                                                                if (resetAudio3Timing > 0) {
                                                                                                                                audpay3.setCurrentTime(resetAudio3Timing);
                                                                                                                                resetAudio3Timing = 0;
                                                                                                                                }
                                                                                                                                audioMixPlaying = true;
                                                                                                                                }, false);
                                                                                                       audpay3.addEventListener("playing", function(e) {
                                                                                                                                audioplaying=true;
                                                                                                                                if (resetAudio3Timing > 0) {
                                                                                                                                audpay3.setCurrentTime(resetAudio3Timing);
                                                                                                                                resetAudio3Timing = 0;
                                                                                                                                }
                                                                                                                                audioMixPlaying = true;
                                                                                                                                }, false);
                                                                                                       audpay3.addEventListener("ended", function(e) {
                                                                                                                                audioplaying=false;
                                                                                                                                audioMixPlaying = false;
                                                                                                                                setTimeout(function() {
                                                                                                                                           $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                                                                           }, 300);
                                                                                                                                }, false);
                                                                                                       audpay3.addEventListener("pause", function(e) {
                                                                                                                                audioplaying=false;
                                                                                                                                audioMixPlaying = false;
                                                                                                                                if(appPaused===true){
                                                                                                                                try{
                                                                                                                                if(device.platform==="Android"|| device.platform==='iOS'){
                                                                                                                                params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
                                                                                                                                window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                                                                                                                                }
                                                                                                                                }catch(e){}                                                  }
                                                                                                                                
                                                                                                                                }, false);
                                                                                                       }
                                                                                                       });
                                                            if (audioMixFirstLoadTime === true && category.audiomixdownloaded === true) {
                                                            if (category.audios != undefined && category.audios.length > 0 && playListAudioSourceList[0] != undefined) {
                                                            var start = 0;
                                                            for (var x = 0; x < playListAudioSourceList.length; x++) {
                                                            if (resetAudioTimings === true) {
                                                            break;
                                                            }
                                                            currentTrack = currentAudioTracks[x];
                                                            start += currentTrack.duration;
                                                            if (currentTrack.loadedreset === false || currentTrack.duration === 0) {
                                                            setDurMedia(category, x, function() {});
                                                            } else {
                                                            if (start !== currentTrack.end) {
                                                            setDurMedia(category, x, function() {});
                                                            }
                                                            }
                                                            }
                                                            if (resetAudioTimings === false) {
                                                            audioMixFirstLoadTime = false;
                                                            loadingAudioMix = true;
                                                            if (category.audiomixdownloaded === true && category.audiomixurl.length > 0 && audioMixLoaded === false && audioAudioPlayer3 !== undefined) {
                                                            audioAudioPlayer3.pause();
                                                            resetAudioTimings=false;
                                                            audioAudioPlayer3.setSrc(category.audiomixurl);
                                                            audioAudioPlayer3.load();
                                                            audioMixLoadTrack = 0;
                                                            }
                                                            }
                                                            }
                                                            }
                                                            $(".audioplayer .mejs-play").off("vclick");
                                                            $(".audioplayer .mejs-play").on("vclick", function(event) {
                                                                                            try {
                                                                                            if (mejsOk === true) {
                                                                                            mejsOk = false;
                                                                                            var triggerId;
                                                                                            audioPlayerPositionSet = false;
                                                                                            audioPlayerPositionSetTime = 0;
                                                                                            if (audioMixLoaded === true && audioMixFirstLoadTime === false) {
                                                                                            if ($(this).hasClass("mejs-pause")) {
                                                                                            audioPaused = true;
                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                            audioAudioPlayer3.pause();
                                                                                            audioAudioPlayer1.pause();
                                                                                            } else {
                                                                                            audioPaused = false;
                                                                                            if (startFirstTrack === true) {
                                                                                            startFirstTrack = false;
                                                                                            firstAud = playListAudioSourceList[0];
                                                                                            triggerId = "#playaudio-" + firstAud.categoryid + "-" + firstAud.audioid;
                                                                                            $(triggerId).trigger("vclick");
                                                                                            } else {
                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                            audioAudioPlayer3.play();
                                                                                            }
                                                                                            }
                                                                                            } else {
                                                                                            if (audioMixLoaded === true && audioMixFirstLoadTime === true) {
                                                                                            if (audioMixPlaying === false) {
                                                                                            audioAudioPlayer3.play();
                                                                                            }
                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                            event.preventDefault();
                                                                                            } else {
                                                                                            event.preventDefault();
                                                                                            if ($(this).hasClass("mejs-pause")) {
                                                                                            audioPaused = true;
                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-pause").addClass("mejs-play");
                                                                                            audioAudioPlayer1.pause();
                                                                                            } else {
                                                                                            audioPaused = false;
                                                                                            if (startFirstTrack === true) {
                                                                                            startFirstTrack = false;
                                                                                            firstAud = playListAudioSourceList[0];
                                                                                            if ((nextAudioUrl.indexOf("http://") > -1 || nextAudioUrl.indexOf("https://") > -1) && audioplayerIndex1 === 0) {
                                                                                            $("#audioplayerdiv1 .mejs-playpause-button button").addClass("audioloading");
                                                                                            }
                                                                                            triggerId = "#playaudio-" + firstAud.categoryid + "-" + firstAud.audioid;
                                                                                            $(triggerId).trigger("vclick");
                                                                                            } else {
                                                                                            
                                                                                            $("#audioplayerdiv1 div.mejs-controls div.mejs-button").removeClass("mejs-play").addClass("mejs-pause");
                                                                                            audioAudioPlayer1.play();
                                                                                            }
                                                                                            }
                                                                                            }
                                                                                            }
                                                                                            setTimeout(function() {
                                                                                                       mejsOk = true;
                                                                                                       }, 300);
                                                                                            }
                                                                                            event.preventDefault();
                                                                                            } catch (e) {
                                                                                            errorHandler("mejs vclick", e);
                                                                                            }
                                                                                            });
                                                            }
                                                            });
                                setTimeout(function() {
                                           $("#tabcontainer").addClass("plshowing");
                                           $("#footerbarleftbckbtn").show();
                                           $("#podcastpagehead").addClass("headerhide");
                                           $("#podcastpage").removeClass("categorylistview");
                                           $("#mediamaincontent").addClass("playlistviewtab");
                                           $("#mediamaincontent").removeClass(currentTab);
                                           $("#playlisttab").show();
                                           //$("div.flipper").css("transform", "rotateY(-180deg)");
                                    //alert("2");
                                    $("#audiotab").css("transform", "scaleX(0)");
                                    $("#playlisttab").css("transform", "scaleY(1)");
                                    $("html,body").animate({
                                                                  scrollTop: 0
                                                                  }, 100);
                                           setPagePadderDiv("playlistScroller", true, "audio");
                                           if (mediaInit === true) {
                                           showMessage = true;
                                           var allDownloaded = true;
                                           if (category.audiomixdownloaded === false) {
                                           allDownloaded = false;
                                           }
                                           category.alldownloaded = allDownloaded;
                                           activeUser.saveFilesList(undefined, "audiocategories", false, function() {});
                                           if (category !== undefined && category.audios.length > 0 && category.alldownloaded === false && category.audioisdownloading === -1 && showMessage === true) {
                                           msgTitle = resources.mymusic;
                                           msgBtnValue = resources.btnOk;
                                           msgStr = resources.downloadaudioinfo;
                                           showMessage = false;
                                           navigator.notification.confirm(msgStr, function() {
                                                                          hidePleaseWait();
                                                                          showMessage = true;
                                                                          }, msgTitle, msgBtnValue);
                                           }
                                           }
                                           setPagePadderDiv("playlistScroller", true, "audio");
                                           }, 300);
                                }
                                setTimeout(function() {
                                           setPagePadderDiv("audioPodcastScroller", true);
                                           }, 300);
                                }
                                event.stopPropagation();
                                saveFilesListAll();
                                } catch (e) {
                                errorHandler("audioseriesbtn vclick", e);
                                }
                                setTimeout(function() {
                                           setPagePadderDiv("audioPodcastScroller", true);
                                           mediaSeriesBtnOk = true;
                                           }, 300);
                                });
        setTimeout(function() {setPagePadderDiv("audioPodcastScroller", true);},600);
    } catch (e) {
        errorHandler("setAudioSeriesBtn", e);
    }
}

function videoPlayNext(vidplayer) {
    try {
        currentVideoPlaylistNo += 1;
        if (currentVideoPlaylistNo >= playListVideoSourceList.length) {
            currentVideoPlaylistNo = 0;
        }
        var currentPlayListItem = playListVideoSourceList[currentVideoPlaylistNo];
        var nextUrl = currentPlayListItem.isdownloaded === true ? currentPlayListItem.fileuri : currentPlayListItem.videopath;
        var triggerId = "#playvideo-" + currentPlayListItem.categoryid + "-" + currentPlayListItem.seriesid + "-" + currentPlayListItem.videoid;
        $(triggerId).trigger("vclick");
    } catch (e) {
        errorHandler("videoPlayNext", e);
    }
}


function setDownloadVideoBtn() {
    $(".downloadvideobtn").off("vclick");
    $(".downloadvideobtn").on("vclick", function(event) {
                              try {
                              event.preventDefault();
                              if (deviceIsOnline === false) {
                              msgStr = resources.mediaconnectionfileerror;
                              msgTitle = resources.connError;
                              msgBtnValue = resources.btnOk;
                              navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                              } else {
                              var id = $(event.currentTarget).attr("id");
                              var ids = id.split("-");
                              var tabId = ids[1];
                              var videocategoryid = ids[2];
                              var seriesId = ids[3];
                              var videoid = ids[4];
                              var category = activeUser.getVideocategoryById(tabId, videocategoryid, seriesId);
                              if (category !== undefined) {
                              var video = category.getVideoItemById(videoid);
                              if (video != undefined) {
                              video.downloadVideoItem(true, "videocategories", function(ret) {
                                                      if (ret === true) {
                                                      $(".podcastitemsul").listview("refresh");
                                                      setDeleteVideoBtn();
                                                      playListVideoSourceList = category.videos;
                                                      setPagePadderDiv("videoPodcastScroller", false);
                                                      }
                                                      });
                              }
                              }
                              }
                              } catch (e) {
                              errorHandler("downloadvideobtn vclick", e);
                              }
                              });
}
function setViewVideoNotesBtn() {
    $(".downloadnotesbtn").off("vclick");
    $(".downloadnotesbtn").on("vclick", function(event) {
                              try {
                              event.preventDefault();
                              var btnId = $(event.currentTarget).attr("id");
                              var ids = btnId.split("-");
                              var tabId = ids[1];
                              var categoryId = ids[2];
                              var seriesId = ids[3];
                              var category = activeUser.getVideocategoryById(tabId, categoryId, seriesId);
                              if (category !== undefined) {
                              pdfNotesCategory = category;
                              var videoNoteUrl = category.videonoteurl;
                              if(videoNoteUrl !==undefined  && videoNoteUrl.length > 0){
                              showPleaseWait();
                              viewFile = videoNoteUrl.substring(videoNoteUrl.lastIndexOf("/") + 1);
                              itemPdfFile = viewFile;
                              
                              if (deviceIsOnline === false && videoNoteUrl.indexOf("file://") === -1) {
                              msgStr = resources.mediaconnectionfileerror;
                              msgTitle = resources.connError;
                              msgBtnValue = resources.btnOk;
                              navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                              } else {
                              
                              if(videoNoteUrl.indexOf("file://") > 0){
                              if (device.platform === "Android"|| device.platform === "iOS") {
                              androidPDFView(pdfItemviewFile);
                              } else {
                              openWebView(pdfItemviewFile);
                              }
                              }else{
                              //showPleaseWait();
                                  $("#podcastpage").append(mloadingGif);
                                  openNotes(viewFile);
                              /*theoryMediaDir.getDirectory("videonotes", {
                                                          create: true,
                                                          exclusive: false
                                                          }, checkNotesPDFDirExists, fail);*/
                              
                              
                              }
                              }
                              }
                              }
                              
                              } catch (e) {
                              errorHandler("setViewVideoNotesBtn vclick", e);
                              }
                              });
}
                                     
 function openNotes(viewFile1) {
     try {
         $("#podcastpage").append(mloadingGif);
         theoryMediaDir.getDirectory("videonotes", {
            create: true,
            exclusive: false
         }, checkNotesPDFDirExists, fail);
         retry = true;
     } catch (e) {
         errorHandler("openNotes", e);
     }
 }

function setDownloadAllVideosBtn() {
    $(".downloadallvideosbtn").off("vclick");
    $(".downloadallvideosbtn").on("vclick", function(event) {
                                  try {
                                  event.preventDefault();
                                  if (deviceIsOnline === false) {
                                  msgStr = resources.mediaconnectionfileerror;
                                  msgTitle = resources.connError;
                                  msgBtnValue = resources.btnOk;
                                  navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                  } else {
                                  var btnId = $(event.currentTarget).attr("id");
                                  var ids = btnId.split("-");
                                  var tabId = ids[1];
                                  var categoryId = ids[2];
                                  var seriesId = ids[3];
                                  var category = activeUser.getVideocategoryById(tabId, categoryId, seriesId);
                                  if (category !== undefined) {
                                  msgStr = resources.downloadallvideosinfo;
                                  msgTitle = resources.myvideos;
                                  msgBtnValue = resources.btnOk;
                                  navigator.notification.confirm(msgStr, function() {
                                                                 category.downloadAllVideoItems(true, "videocategories", function(ret) {
                                                                                                $(".podcastitemsul").listview("refresh");
                                                                                                setDeleteAllVideosBtn();
                                                                                                setDeleteVideoBtn();
                                                                                                playListVideoSourceList = category.videos;
                                                                                                setPagePadderDiv("videoPodcastScroller", true);
                                                                                                });
                                                                 }, msgTitle, msgBtnValue);
                                  }
                                  }
                                  } catch (e) {
                                  errorHandler("downloadallvideosbtn vclick", e);
                                  }
                                  });
}
function setDeleteAllVideosBtn() {
    $(".deleteallvideosbtn").off("vclick");
    $(".deleteallvideosbtn").on("vclick", function(event) {
                                try {
                                event.preventDefault();
                                var id = $(event.currentTarget).attr("id");
                                $("#" + id).attr("disabled", "disabled");
                                var ids = id.split("-");
                                var tabId = ids[1];
                                var videocategoryid = ids[2];
                                var seriesId = ids[3];
                                var category = activeUser.getVideocategoryById(tabId, videocategoryid, seriesId);
                                if (category !== undefined) {
                                category.deleteAllVideoItems("videocategories", function() {
                                                             $(".podcastitemsul").listview("refresh");
                                                             setDownloadAllVideosBtn();
                                                             setDownloadVideoBtn();
                                                             playListVideoSourceList = category.videos;
                                                             });
                                }
                                } catch (e) {
                                errorHandler("deleteallvideosbtn vclick", e);
                                }
                                });
}

function setPlayVideoBtn() {
    $(".playvideobtn").off("vclick");
    $(".playvideobtn").on("vclick", function(event) {
                          try {
                          event.preventDefault();
                          videoPaused = false;
                          var id = $(event.currentTarget).attr("id");
                          var ids = id.split("-");
                          var tabId = ids[1];
                          var videocategoryid = ids[2];
                          var seriesid = ids[3];
                          var videoid = ids[4];
                          var category = activeUser.getVideocategoryById(tabId, videocategoryid, seriesid);
                          if (category !== undefined) {
                          var video = category.getVideoItemById(videoid);
                          if (video != undefined) {
                          if (video.isdownloaded === false && deviceIsOnline === false) {
                          msgStr = resources.mediaconnectionfileerror;
                          msgTitle = resources.connError;
                          msgBtnValue = resources.btnOk;
                          navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                          } else {
                          $(".playvideobtn").removeClass("playing");
                          if (device.platform !== "Android") {
                          playVideoVideo(video);
                          } else {
                          playVideoAndroid(video);
                          }
                          setUserMediaPosition("video", category.tabid.toString(), category.categoryid.toString(), videoid);
                          }
                          }
                          }
                          } catch (e) {
                          errorHandler("playvideobtn vclick", e);
                          }
                          });
}

function setDeleteVideoBtn() {
    $(".deletevideobtn").off("vclick");
    $(".deletevideobtn").on("vclick", function(event) {
                            try {
                            event.preventDefault();
                            var id = $(event.currentTarget).attr("id");
                            var ids = id.split("-");
                            var tabId = ids[1];
                            var videocategoryid = ids[2];
                            var seriesId = ids[3];
                            var videoid = ids[4];
                            var category = activeUser.getVideocategoryById(tabId, videocategoryid, seriesId);
                            if (category !== undefined) {
                            var video = category.getVideoItemById(videoid);
                            if (video != undefined) {
                            video.deleteVideoItem("videocategories", function(ret) {
                                                  if (ret === true) {
                                                  $(".podcastitemsul").listview("refresh");
                                                  setDownloadVideoBtn();
                                                  setPagePadderDiv("videoPodcastScroller", false);
                                                  }
                                                  });
                            }
                            }
                            } catch (e) {
                            errorHandler("deletevideobtn vclick", e);
                            }
                            });
}

function setDownloadAllAudiosBtn() {
    $(".downloadallaudiosbtn").off("vclick");
    $(".downloadallaudiosbtn").on("vclick", function(event) {
                                  try {
                                  if (downloadAllAudioOk === true) {
                                  downloadAllAudioOk = false;
                                  event.preventDefault();
                                  if (deviceIsOnline === false) {
                                  msgStr = resources.mediaconnectionfileerror;
                                  msgTitle = resources.connError;
                                  msgBtnValue = resources.btnOk;
                                  navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                  } else {
                                  var btnId = $(event.currentTarget).attr("id");
                                  var ids = btnId.split("-");
                                  var tabId = ids[1];
                                  var categoryId = ids[2] + "-" + ids[3];
                                  var category = activeUser.getAudiocategoryById(tabId, categoryId);
                                  if (category !== undefined) {
                                  audioMixLoaded=false;
                                  category.downloadAllAudioItems(true, function(ret) {
                                                                 $(".podcastitemsul").listview("refresh");
                                                                 setDeleteAllAudiosBtn();
                                                                 setDeleteAudioBtn();
                                                                 // playListAudioSourceList = category.audios;
                                                                 setPagePadderDiv("audioPodcastScroller", false);
                                                                 });
                                  }
                                  }
                                  }
                                  setTimeout(function() {
                                             downloadAllAudioOk = true;
                                             }, 600);
                                  } catch (e) {
                                  errorHandler("downloadallaudiosbtn vclick", e);
                                  }
                                  });
}
function setDownloadAllPlaylistBtn() {
    $(".downloadallplaylistbtn").off("vclick");
    $(".downloadallplaylistbtn").on("vclick", function(event) {
                                    try {
                                    event.preventDefault();
                                    if (deviceIsOnline === false) {
                                    msgStr = resources.offlineplaylist;
                                    msgTitle = resources.connError;
                                    msgBtnValue = resources.btnOk;
                                    navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                    } else {
                                    if($(".downloadallplaylistbtn div.podcastitemdivdownload").hasClass("editmode")){
                                    return true;
                                    }else{
                                    if (downloadAllAudioOk === true) {
                                    downloadAllAudioOk = false;
                                    if (deviceIsOnline === false) {
                                    msgStr = resources.mediaconnectionfileerror;
                                    msgTitle = resources.connError;
                                    msgBtnValue = resources.btnOk;
                                    navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                    } else {
                                    var btnId = "#" + $(event.currentTarget).attr("id");
                                    if ($(btnId).hasClass("downloadingfiles")){
                                    return true;
                                    }else{
                                    
                                    
                                    if(currentPlaylist!==undefined && currentPlaylist.playlistitems!==undefined && currentPlaylist.playlistitems.length>0){
                                    var alldownloaded = true;
                                    for(var i=0; i<currentPlaylist.playlistitems.length; i++){
                                    var pli =currentPlaylist.playlistitems[i];
                                    if(pli.isdownloaded===false){
                                    alldownloaded=false;
                                    }
                                    pli.downloadPlaylistItem();
                                    }
                                    if(alldownloaded===false){
                                    $(btnId + " .podcastitemdivdownload").html(resources.downloadingall);
                                    $(btnId).addClass("downloadingfiles");
                                    $(btnId).removeClass("deleteallplaylistbtn");
                                    }
                                    }
                                    }
                                    }
                                    }
                                    }
                                    setTimeout(function() {
                                               downloadAllAudioOk = true;
                                               }, 600);
                                    }
                                    } catch (e) {
                                    errorHandler("downloadallplaylistbtn vclick", e);
                                    downloadAllAudioOk = false;
                                    }
                                    });
}
function setDeleteAllPlaylistBtn() {
    $(".deleteallplaylistbtn").off("vclick");
    $(".deleteallplaylistbtn").on("vclick", function(event) {
                                  try {
                                  event.preventDefault();
                                  if (deviceIsOnline === false) {
                                  msgStr = resources.offlineplaylist;
                                  msgTitle = resources.connError;
                                  msgBtnValue = resources.btnOk;
                                  navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                  } else {
                                  if($(".deleteallplaylistbtn div.podcastitemdivdownload").hasClass("editmode")){
                                  return true;
                                  }else{
                                  if (downloadAllAudioOk === true) {
                                  downloadAllAudioOk = false;
                                  event.preventDefault();
                                  if (deviceIsOnline === false) {
                                  msgStr = resources.mediaconnectionfileerror;
                                  msgTitle = resources.connError;
                                  msgBtnValue = resources.btnOk;
                                  navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                  } else {
                                  var btnId = "#" + $(event.currentTarget).attr("id");
                                  if(currentPlaylist!==undefined && currentPlaylist.playlistitems!==undefined && currentPlaylist.playlistitems.length>0){
                                  var alldownloaded = true;
                                  var deletePlaylistItemsLength = currentPlaylist.playlistitems.length;
                                  var deletePlaylistItems =currentPlaylist.playlistitems;
                                  for(var i=0; i<deletePlaylistItemsLength; i++){
                                  
                                  var pli =deletePlaylistItems[0].userplaylistid + "-" + deletePlaylistItems[0].playlistitemid;
                                  var  playlistitemid = "downloadaudio-" + pli;
                                  deletePlaylistItem(playlistitemid, pli);
                                  }
                                  $(btnId + " .podcastitemdivdownload").html(resources.downloadallaudios);
                                  $(btnId).removeClass("downloadingfiles");
                                  $(btnId).hide();
                                  }
                                  }
                                  }
                                  }
                                  setTimeout(function() {
                                             downloadAllAudioOk = true;
                                             }, 600);
                                  }
                                  } catch (e) {
                                  errorHandler("setDeleteAllPlaylistBtn", e);
                                  }
                                  });
}
function setDownloadAudioBtn() {
    $(".downloadaudiobtn").off("vclick");
    $(".downloadaudiobtn").on("vclick", function(event) {
                              try {
                              event.preventDefault();
                              var isPlaylist = false;
                              if (deviceIsOnline === false) {
                              msgStr = resources.mediaconnectionfileerror;
                              msgTitle = resources.connError;
                              msgBtnValue = resources.btnOk;
                              navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                              } else {
                              var id = $(event.currentTarget).attr("id");
                              var ids = id.split("-");
                              var tabId, audiocategoryid, audioid, category, audio;
                              if($(this).hasClass("playlistdownloaditem")===true){
                              isPlaylist=true;
                              var plItem = currentPlaylist.getPlaylistItemById(ids[2]);
                              if(plItem!==undefined){
                              var catRefs = plItem.categoryref.split("-");
                              tabId = catRefs[0];
                              audiocategoryid = catRefs[1] + "-" + catRefs[2];
                              audioid = plItem.audioid + "mp3";
                              }
                              }else{
                              tabId = ids[1];
                              audiocategoryid = ids[2] + "-" + ids[3];
                              audioid = ids[4];
                              }
                              
                              category = activeUser.getAudiocategoryById(tabId, audiocategoryid);
                              if (category !== undefined) {
                              audio = category.getAudioItemById(audioid);
                              if (audio !== undefined && audio.isdownloaded===false) {
                              
                              
                              audio.downloadAudioItem(true, isPlaylist, function(ret) {
                                                      try{
                                                      if (ret === true) {
                                                      $(".podcastitemsul").listview("refresh");
                                                      setDownloadAudioBtn();
                                                      if(isPlaylist===false){
                                                      setDeleteAudioBtn();
                                                          $(".on").addClass("nodisplay");
                                                          $(".onall").addClass("nodisplay");
                                                      setPagePadderDiv("audioPodcastScroller", false);
                                                      }else{
                                                      setPagePadderDiv("playlistScroller", false);
                                                      }
                                                      }
                                                      } catch (e) {
                                                      errorHandler("audio.downloadAudioItem vclick", e);
                                                      }
                                                      });
                              }
                              }
                                  $(".on").css("display","none");
                                  $(".onall").css("display","none");
                              }
                              } catch (e) {
                              errorHandler("downloadaudiobtn vclick", e);
                              }
                              });
    
    
    $(".playlistdeleteitem").off("vclick");
    $(".playlistdeleteitem").on("vclick", function(event) {
                                try {
                                event.preventDefault();
                                /*
                                if (deviceIsOnline === false) {
                                msgStr = resources.offlineplaylist;
                                msgTitle = resources.connError;
                                msgBtnValue = resources.btnOk;
                                navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                } else {
                                var id=$(event.currentTarget).attr("id");
                                var  playlistitemid = id.replace("downloadaudio-", "");
                                deletePlaylistItemDownload(id, playlistitemid);
                                
                                }
                                  */
                                } catch (e) {
                                errorHandler("playlistdeletebtn vclick", e);
                                }
                                });
    
}

function setDeleteAllAudiosBtn() {
    $(".onall").off("vclick");
    $(".onall").on("vclick", function(event) {
                                try {
                                event.preventDefault();
                                restoreswipe();
                                $(".msdeleteall").removeClass("swipedeleteall");

                                var id = $(event.currentTarget).attr("id");
                                $("#" + id).attr("disabled", "disabled");
                                var ids = id.split("-");
                                var tabId = ids[1];
                                var audiocategoryid = ids[2] + "-" + ids[3];
                                var category = activeUser.getAudiocategoryById(tabId, audiocategoryid);
                                if (category !== undefined) {
                                category.deleteAllAudioItems(function() {
                                                             // playListAudioSourceList = category.audios;
                                                             if (category.alldownloaded === true) {
                                                             category.alldownloaded = false;
                                                             
                                                             }
                                                             audioMixLoaded=false;
                                                             activeUser.saveFilesList(undefined, "audiocategories", false, function() {});
                                                             audioMixLoaded = false;
                                                             loadingAudioMix = false;
                                                             audioMixPlaying = false;
                                                             trackUpdating = false;
                                                             if (audioAudioPlayer1 != undefined) {
                                                             audioAudioPlayer1.pause();
                                                             if (category.audios !== undefined && category.audios.length > 0) {
                                                             nextAudioUrl = category.audios[0].isdownloaded === true ? category.audios[0].fileuri : category.audios[0].audiopath;
                                                             if (nextAudioUrl !== undefined && nextAudioUrl.length > 0) {
                                                             audioAudioPlayer1.pause();
                                                             audioAudioPlayer1.setSrc(nextAudioUrl);
                                                             audioAudioPlayer1.load();
                                                             }
                                                             }
                                                             }
                                                             if (audioAudioPlayer3 != undefined) {
                                                             audioAudioPlayer3.pause();
                                                             }
                                                             $(".podcastitemsul").listview("refresh");
                                                             setDownloadAllAudiosBtn();
                                                             setDownloadAudioBtn();
                                                             });
                                }
                                } catch (e) {
                                errorHandler("deleteallaudiosbtn vclick", e);
                                }
                                });
}

function setPlayAudiosBtn() {
    $(".playaudiobtn").off("vclick");
    $(".playaudiobtn").on("vclick", function(event) {
                          try {
                          if (playAudioOk === true) {
                          playAudioOk = false;
                          event.preventDefault();
                          audioFirstPlay = false;
                          audioPaused = false;
                          var id = $(event.currentTarget).attr("id");
                          var ids = id.split("-");
                          var tabid = ids[1];
                          var audiocategoryid = ids[2] + "-" + ids[3];
                          var audioid = ids[4];
                          var category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                          if (category !== undefined) {
                          var audio = category.getAudioItemById(audioid);
                          if (audio != undefined) {
                          if (audio.isdownloaded === false && deviceIsOnline === false && category.audiomixdownloaded===false) {
                          msgStr = resources.mediaconnectionfileerror;
                          msgTitle = resources.connError;
                          msgBtnValue = resources.btnOk;
                          navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                          } else {
                          playAudioAudio(audio, category, true);
                          setUserMediaPosition("audio", tabid.toString(), audiocategoryid.toString(), audioid);
                          }
                          }
                          }
                          setTimeout(function() {
                                     playAudioOk = true;
                                     }, 300);
                          }
                          } catch (e) {
                          errorHandler("playaudiobtn vclick", e);
                          }
                          });
}
function setPlayListAudiosBtn() {
    $(".playlistaudiobtn").off("vclick");
    $(".playlistaudiobtn").on("vclick", function(event) {
                              try {
                              
                              if (playAudioOk === true) {
                              playAudioOk = false;
                              event.preventDefault();
                              audioFirstPlay = false;
                              audioPaused = false;
                              var id = $(event.currentTarget).attr("id");
                              var ids = id.split("-");
                              var userplaylistid = ids[1];
                              var playlistitemId = ids[2];
                              
                              var playlist = activeUser.getPlaylistById(userplaylistid);
                              if (playlist !== undefined) {
                              var playlistItem = playlist.getPlaylistItemById(playlistitemId);
                              if (playlistItem !== undefined) {
                              var categoryRef = playlistItem.categoryref;
                              var audioId = playlistItem.audioid + "mp3";
                              if(categoryRef!==undefined && categoryRef.length > 0){
                              var idsPl = categoryRef.split("-");
                              var tabid = idsPl[0];
                              var audiocategoryid = idsPl[1] + "-" + idsPl[2];
                              var category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                              if (category !== undefined) {
                              var audio = category.getAudioItemById(audioId);
                              if (audio != undefined) {
                              if (deviceIsOnline === false && audio.isdownloaded===false) {
                              msgStr = resources.mediaconnectionfileerror;
                              msgTitle = resources.connError;
                              msgBtnValue = resources.btnOk;
                              navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                              } else {
                              playPlaylistAudio(playlist, playlistItem, audio, category);
                              }
                              }
                              }
                              }
                              }
                              }
                              setTimeout(function() {
                                         playAudioOk = true;
                                         }, 300);
                              }
                              } catch (e) {
                              errorHandler("setPlayListAudiosBtn vclick", e);
                              }
                              });
}
function setDeleteAudioBtn() {
    $(".on").off("vclick");
    $(".on").on("vclick", function(event) {
                            try {
                            event.preventDefault();
                            restoreswipe();
                            var id = $(event.currentTarget).attr("id");
                            var ids = id.split("-");
                            var tabId = ids[1];
                            var audiocategoryid = ids[2] + "-" + ids[3];
                            var audioid = ids[4];
                            //var remretid = id.replace("ondeleteaudio", "mdeleteaudio");
                            //$("#" + remretid).removeClass("swipeallow");
                            var category = activeUser.getAudiocategoryById(tabId, audiocategoryid);
                            if (category !== undefined) {
                            var audio = category.getAudioItemById(audioid);
                            if (audio != undefined) {
                            audio.deleteAudioItem(function(ret) {
                                                  if (ret === true) {
                                                  $(".podcastitemsul").listview("refresh");
                                                  setDownloadAudioBtn();
                                                  //playListAudioSourceList = category.audios;
                                                  setPagePadderDiv("audioPodcastScroller", false);
                                                  if (audioMixLoaded === false) {
                                                  var currentPlayingItem = category.audios[currentAudioPlaylistNo];
                                                  if (currentPlayingItem.audioid === audioid) {
                                                  nextAudioUrl = "";
                                                  nextAudioUrl = category.audios[currentAudioPlaylistNo].isdownloaded === true ? category.audios[currentAudioPlaylistNo].fileuri : category.audios[currentAudioPlaylistNo].audiopath;
                                                  if (audioAudioPlayer1 !== null && audioAudioPlayer1 !== undefined) {
                                                  audioAudioPlayer1.pause();
                                                  if (nextAudioUrl !== undefined && nextAudioUrl.length > 0) {
                                                 
                                                  audioAudioPlayer1.load();
                                                  }
                                                  }
                                                  }
                                                  }
                                                  }
                                                  });
                            }
                            }
                            } catch (e) {
                            errorHandler("deleteaudiobtn vclick", e);
                            }
                            });
}
function hideVideoPlayer() {
    try {
        if (device.platform !== "Android") {
            $("#videoplaycontainerdiv").hide(200);
            var containertype = tablet === true ? "video" : "video";
            setTimeout(function() {
                       setPagePadderDiv("playlistScroller", true, containertype);
                       }, 300);
        }
    } catch (e) {
        errorHandler("hideVideoPlayer", e);
    }
}

function resetAudioTrackDurations(category, audioplayIndex, duration) {
    try {
        var previousItem = {};
        var resetNextItems = false;
        if (device.platform === "Android" && duration === 100) {
            return true;
        }
        if (duration > 0) {
            if (category.audiotracks !== undefined && category.audiotracks.length > 0) {
                for (var i = 0; i < category.audiotracks.length; i++) {
                    var currentTrack = category.audiotracks[i];
                    var previousItemNo = i - 1;
                    previousItem = previousItemNo > -1 ? category.audiotracks[previousItemNo] : undefined;
                    if (audioplayIndex >= i) {
                        if (audioplayIndex === i) {
                            resetNextItems = true;
                            currentTrack.duration = duration;
                            currentTrack.loadedreset = true;
                            if (i === 0) {
                                currentTrack.start = 0;
                                currentTrack.end = duration;
                            }
                        }
                    }
                    if (resetNextItems === true && previousItem !== undefined) {
                        currentTrack.start = previousItem.end;
                        currentTrack.end = previousItem.end + currentTrack.duration;
                    }
                }
                currentAudioTracks = category.audiotracks;
                activeUser.saveFilesList(undefined, "audiocategories", false, function() {});
            }
        }
    } catch (e) {
        errorHandler("resetAudioTrackDurations", e);
    }
    return true;
}

function resetMediaDownloads() {
    try {
        checkDownloadItems(function() {});
        return true;
    } catch (e) {
        return false;
    }
}

function resetMediaPlayers() {
    try {
        var podcastUrl = "";
        var podcastaudioUrl = "";
        var audio1url = "";
        var audio2url = "";
        var audio3url = "";
        var videoUrl = "";
        var videoPosterImg = tablet === true ? "css/client/images/videoposter.png" : "css/client/images/videoposter1.png";
        var tag = "";
        if (device.platform !== "Android" && podcastVideoPlayer != undefined && podcastVideoPlayer !== null) {
            podcastUrl = $("#videopodplayer").attr("src");
        }
        if (podcastAudioPlayer != undefined && podcastAudioPlayer !== null) {
            podcastaudioUrl = $("#audiopodplayer").attr("src");
        }
        if (device.platform !== "Android" && videoVideoPlayer != undefined && videoVideoPlayer !== null) {
            videoUrl = $("#videoplayer").attr("src");
        }
        if (audioAudioPlayer1 != undefined && audioAudioPlayer1 !== null) {
            audio1url = $("#audioplayer1").attr("src");
        }
        if (audioAudioPlayer3 != undefined && audioAudioPlayer3 !== null) {
            audio3url = $("#audioplayer3").attr("src");
        }
        destroyPlayers();
        tag = '<video id="videopodplayer" class="videoplayer"  poster="' + videoPosterImg + '"  preload="auto" src="' + podcastUrl + '" type="video/mp4"></video>';
        $("#videopoddiv").html(tag);
        tag = '<audio id="audiopodplayer" src="' + podcastaudioUrl + '" class="audiopodplayer" controls="controls" preload="auto"></audio>';
        $("#audiopodplayerdiv").html(tag);
        tag = '<video id="videoplayer" class="videoplayer"  poster="' + videoPosterImg + '" preload="auto" src="' + videoUrl + '" type="video/mp4"></video>';
        $("#videoplayerdiv").html(tag);
        tag = '<audio id="audioplayer1" src="' + audio1url + '" class="audioplayer" controls="controls" type="audio/mpeg" preload="auto"></audio>';
        $("#audioplayerdiv1").html(tag);
        tag = '<audio id="audioplayer3" src="' + audio3url + '" class="audioplayer" controls="controls" type="audio/mpeg" preload="auto"></audio>';
        $("#audioplayerdiv3").html(tag);
    } catch (e) {
        errorHandler("resetMediaPlayers", e);
    }
    return true;
}

function setProgressRail(currentTimeSet, currentDuration) {
    try {
        var player = "#audioplayerdiv1";
        var total = $(player + " .mejs-time-total");
        var loaded = $(player + " .mejs-time-loaded");
        var current = $(player + " .mejs-time-current");
        var currenttime = $(player + " .mejs-currenttime");
        var handle = $(player + " .mejs-time-handle");
        var newWidth = Math.round(total.width() * currentTimeSet / currentDuration);
        var handlePos = newWidth - Math.round(handle.outerWidth(true) / 2);
        var newTime = durationToMinutes(currentTimeSet);
        currenttime.html(newTime);
        current.width(newWidth);
        handle.css("left", handlePos);
    } catch (e) {}
    return true;
}

function setDurMedia(category, itemNo, returnFunction) {
    try {
        var url = playListAudioSourceList[itemNo].isdownloaded === true ? playListAudioSourceList[itemNo].fileuri : playListAudioSourceList[itemNo].audiopath;
        if (isDeviceOnline()===false && playListAudioSourceList[itemNo].isdownloaded===false && category.audiomixdownloaded === true){
            resetAudioTimings = false;
            returnFunction(false);
        }else{
            if (device.platform === "Android") {
                playAudioItem = undefined;
                var durMedia = new Media(url);
                if (durMedia !== undefined && durMedia !== null) {
                    durMedia.seekTo(0);
                    setTimeout(function() {
                               if (durMedia.getDuration() > -1) {
                               resetAudioTrackDurations(category, itemNo, durMedia.getDuration());
                               }
                               durMedia.release();
                               returnFunction(true);
                               }, 600);
                }
            } else {
                audioplayerIndex3 = itemNo;
                resetAudioTimings = true;
                audioAudioPlayer3.setSrc(url);
                audioAudioPlayer3.load();
                
            }
        }
    } catch (e) {
        returnFunction(false);
    }
}
function playlistActive(isActive, className, type){
    if(isActive===true){
        $(".podcastitemdiv").removeClass("playing");
        if(className.substring(0,1)!=="#"){
            className="#" + className;
        }
        $(className).addClass("playing");
        var playingClassName = "";
        $(".playitembtn").removeClass("playbtnactive");
        if(type==="audio"){
            playingClassName = className.replace("podcastitemdiv", "playaudio");
        }else if (type==="video"){
            playingClassName = className.replace("podcastitemdiv", "playvideo");
        } else if (type==="userplaylist"){
            playingClassName = className.replace("podcastitemdiv", "playpoditem");
        }
        $(playingClassName + " div.playitembtn").addClass("playbtnactive");
    } else{
        $(".podcastitemdiv").removeClass("playing");
        $(".playitembtn").removeClass("playbtnactive");
    }
}
function setPlaylistAddBtn(){
    try{
        hidePleaseWait();
        playlistOk=true;
        
        $("#footerplaylistbtn").removeClass("addplaylistitem");
        $("#footerplaylistbtn").addClass("addplaylist");
        $(".addplaylist").off("vclick");
        $(".addplaylist").on("vclick", function(event) {
                             try{
                             event.preventDefault();
                             if (deviceIsOnline === false) {
                             msgStr = resources.offlineplaylist;
                             msgTitle = resources.connError;
                             msgBtnValue = resources.btnOk;
                             navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                             } else {
                             if(playlistOk===true){
                             playlistOk=false;
                             $("#nouserplaylistdiv").hide();
                             playlistTitlePopupOpen();
                             
                             }
                             }
                             } catch (e) {
                             errorHandler("addplaylist", e);
                             }
                             });
        setTimeout(function(){playlistOk=true;},300);
        return true;
    } catch (e) {
        return false;
    }
}
function setPlaylistDeleteBtn(){
    try{
        hidePleaseWait();
        playlistOk=true;
        $(".playlistchkbx").off("vclick");
        $(".playlistchkbx").on("vclick", function(event) {
                               try{
                               var id=$(event.currentTarget).attr("id");
                               id = id.replace("playlistchkbx-", "");
                               if(activeUser.userplaylists!==undefined){
                               showPleaseWait();
                               mediaInit=false;
                               activeUser.deleteUserPlaylists(id, function(ret){
                                                              getPlaylistsForUser(false, function(ret){
                                                                                  $(".playlistchkbxdiv").removeClass('nodisplay');
                                                                                  $(".playlistseriesbtn").off("vclick");
                                                                                  setPlaylistDeleteBtn();
                                                                                  hidePleaseWait();
                                                                                  });
                                                              });
                               }
                               } catch (e) {
                               errorHandler("playlistchkbx", e);
                               }
                               });
        
        return true;
    } catch (e) {
        return false;    }
}
function setPlaylistSelectBtn(){
    try{
        hidePleaseWait();
        playlistOk=true;
        
        $("#footerplaylistselbtn").removeClass("selplaylistitem");
        $("#footerplaylistselbtn").addClass("selplaylist");
        //$(".playlistchkbxdiv").addClass('nodisplay');
        $("#footerplaylistbtn").removeClass("addplaylistitem");
        $("#footerplaylistbtn").addClass("addplaylist");
        //$("#footerplaylistselbtn").removeClass("editmode");
        
        $(".selplaylist").off("vclick");
        $(".selplaylist").on("vclick", function(event) {
                             try{
                             event.preventDefault();
                             if (deviceIsOnline === false) {
                             msgStr = resources.offlineplaylist;
                             msgTitle = resources.connError;
                             msgBtnValue = resources.btnOk;
                             navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                             } else {
                             $("#playlistitemtitlepopup").hide();
                             if($("#footerplaylistselbtn").hasClass("editmode")){
                             $("#footerplaylistselbtn").removeClass("editmode");
                             $(".podcastitemdivdownload").removeClass("editmode");
                             $(".playlistchkbxdiv").addClass('nodisplay');
                             $(".playlistuldiv").removeClass("editmode");
                             setPlaylistSeriesBtn();
                             setPlaylistAddBtn();
                             
                             }else{
                             $(".playlistseriesbtn").off("vclick");
                             $(".playlistchkbxdiv").removeClass('nodisplay');
                             $("#footerplaylistselbtn").addClass("editmode");
                             $(".podcastitemdivdownload").addClass("editmode");
                             $(".playlistuldiv").addClass("editmode");
                             setPlaylistDeleteBtn();
                             }
                             }
                             } catch (e) {
                             errorHandler("selplaylist", e);
                             }
                             });
        return true;
        
    } catch (e) {
        return false;
    }
}
function setPlaylistItemSelectBtn(){
    try{
        playlistOk=true;
        hidePleaseWait();
        
        $(".playlistcheck").addClass("nodisplay");
        $(".plhandle").addClass("nodisplay");
        $(".mediabuttonsdiv").removeClass("nodisplay");
        $("#footerplaylistselbtn").addClass("selplaylistitem");
        $("#footerplaylistselbtn").removeClass("selplaylist");
        $(".downloadallplaylistbtn").removeClass("nodisplay");
        $(".deleteallplaylistbtn").addClass("nodisplay");
        $("#footerplaylistselbtn").removeClass("editmode");
        $(".podcastitemdivdownload").removeClass("editmode");
        $(".playlistuldiv").removeClass("editmode");
        if(currentPlaylist!==undefined && currentPlaylist.playlistitems!==undefined && currentPlaylist.playlistitems.length===0){
            $("#footerplaylistselbtn").hide();
        }else{
            $("#footerplaylistselbtn").show();
            $(".selplaylistitem").off("vclick");
            $(".selplaylistitem").on("vclick", function(event) {
                                     try{
                                     event.preventDefault();
                                     if (deviceIsOnline === false) {
                                     msgStr = resources.offlineplaylist;
                                     msgTitle = resources.connError;
                                     msgBtnValue = resources.btnOk;
                                     navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                     } else {
                                     if( $("#footerplaylistselbtn").hasClass("editmode")===true){
                                     var newTitle = $("[name=playlistitem-title]").val();
                                     if(currentPlaylist!==undefined && $("#playlistitemtitleinput").val().length > 0 && currentPlaylist.title !== $("#playlistitemtitleinput").val()){
                                     var addPl=true;
                                     //newTitle=$("#playlistitemtitleinput").val();
                                     for (var i=0; i < activeUser.userplaylists.length; i++){
                                     pl = activeUser.userplaylists[i];
                                     if(pl.title.toLowerCase() === newTitle.toLowerCase()){
                                     addPl=false;
                                     break;
                                     }
                                     }
                                     if (addPl === false){
                                     msgTitle = resources.requiredFields;
                                     msgBtnValue = resources.btnOk;
                                     msgStr = resources.playlisttitleunique;
                                     navigator.notification.confirm(msgStr, function() {
                                                                    returnFunction(false);
                                                                    }, msgTitle, msgBtnValue);
                                     }else{
                                     currentPlaylist.title = newTitle;
                                     currentPlaylist.updatepending=true;
                                     $("#playlistheader").html(newTitle);
                                     $("#audiocategorycaption-" + currentPlaylist.userplaylistid).html(newTitle);
                                     checkPlaylistUpdates(true, function(){});
                                     }
                                     }
                                     $("#audioplaycontainerdiv").show();
                                     $("#footerplaylistselbtn").removeClass("editmode");
                                     $(".playlistuldiv").removeClass("editmode");
                                     $(".podcastitemdivdownload").removeClass("editmode");
                                     $(".playlistcheck").removeClass("nodisplay");
                                     $(".plhandle").addClass("nodisplay");
                                     $(".playlistcheck").removeClass("nodisplay");
                                     $(".podcastlidownloadall").removeClass("nodisplay");
                                     if(tablet===false){
                                     $(".playlistitemno").removeClass("nodisplay");
                                     }
                                     $(".playitembtn").removeClass("nodisplay");
                                     $("#playlistitemtitlepopup").hide();
                                     $(".playlistcheck").addClass("nodisplay");
                                     $(".mediabuttonsdiv").removeClass("nodisplay");
                                     setPlaylistItemAddBtn();
                                     setPlayListAudiosBtn();
                                     setDownloadAudioBtn();
                                     setDownloadAllPlaylistBtn();
                                     setDeleteAllPlaylistBtn();
                                     }else{
                                     $(".podcastlidownloadall").addClass("nodisplay");
                                     $(".playitembtn").addClass("nodisplay");
                                     $("#footerplaylistselbtn").addClass("editmode");
                                     $(".playlistuldiv").addClass("editmode");
                                     $(".podcastitemdivdownload").addClass("editmode");
                                     $(".playlistaudiobtn").off("vclick");
                                     $(".plhandle").removeClass("nodisplay");
                                     
                                     $(".mediabuttonsdiv").addClass("nodisplay");
                                     $(".playlistcheck").removeClass("nodisplay");
                                     $("#playlistitemtitlepopup").slideDown(600, function() {
                                                                            setPagePadderDiv("playlistScroller", false, "playlist");
                                                                            $("#playlistitemtitleinput").val(currentPlaylist.title);
                                                                            });
                                     audioPaused = true;
                                     if (audioAudioPlayer1 !== undefined && audioAudioPlayer1 !== null) {
                                     audioAudioPlayer1.pause();
                                     }
                                     playlistActive(false, "", "");
                                     setPlaylistItemDeleteBtn();
                                     $( "#podcategoryul").addClass("playlistsortable");
                                     $("#audioplaycontainerdiv").hide();
                                     $( "#podcategoryul.playlistsortable" ).sortable({
                                                                                     items: "li:not(.ui-first-child)",
                                                                                     handle: ".plhandle"
                                                                                     });
                                     
                                     $("#podcategoryul.playlistsortable").sortable();
                                     $("#podcategoryul.playlistsortable").disableSelection();
                                     
                                     $("#podcategoryul.playlistsortable").on("sortstart",function( event, ui ) {
                                                                             playlistScroller.disable();
                                                                             });
                                     
                                     $("#podcategoryul.playlistsortable").on( "sortstop", function(event, ui) {
                                                                             $("#podcategoryul.playlistsortable").listview('refresh');
                                                                             if(currentPlaylist.playlistitems!==undefined){
                                                                             resetPlaylistItemsOrder();
                                                                             }
                                                                             if (playlistScroller !== null && playlistScroller !== undefined) {
                                                                             playlistScroller.destroy();
                                                                             playlistScroller = null;
                                                                             }
                                                                             setTimeout(function() {playlistScroller = new IScroll("#playlistdiv", {bounce: false});}, 0);
                                                                             setPagePadderDiv("playlistScroller", true, "");
                                                                             
                                                                             
                                                                             });
                                     
                                     $("#podcategoryul.playlistsortable").sortable("enable");
                                     setTimeout(function(){
                                                $(".plhandle").addClass("nodisplay");
                                                $(".plhandle").removeClass("nodisplay");
                                                },300);
                                     
                                     
                                     }
                                     }
                                     } catch (e) {
                                     errorHandler("selplaylistitem", e);
                                     }
                                     });
        }
        return true;
        
    } catch (e) {
        return false;
    }
}
function setPlaylistItemAddBtn(){
    try{
        playlistOk=true;
        hidePleaseWait();
        $("#footerplaylistbtn").addClass("addplaylistitem");
        $("#footerplaylistbtn").removeClass("addplaylist");
        $(".addplaylistitem").off("vclick");
        $(".addplaylistitem").on("vclick", function(event) {
                                 event.preventDefault();
                                 if (deviceIsOnline === false) {
                                 msgStr = resources.offlineplaylist;
                                 msgTitle = resources.connError;
                                 msgBtnValue = resources.btnOk;
                                 navigator.notification.confirm(msgStr, function() {}, msgTitle, msgBtnValue);
                                 } else {
                                 activeTab="userplaylist";
                                 setUserMediaPosition("userplaylist", "", "", "");
                                 
                                 if(screen!==undefined && screen.lockOrientation!==undefined){
                                 screen.lockOrientation("portrait");
                                 }
                                 showPleaseWait();
                                 if($("#playlistitemtitleinput").val()!== undefined && $("#playlistitemtitleinput").val().length > 0 &&
                                    $("#playlistitemtitleinput").val()!==currentPlaylist.title){
                                 currentPlaylist.title =$("#playlistitemtitleinput").val();
                                 currentPlaylist.updatepending = true;
                                 }
                                 $("#userplaylistpage").popup({
                                                              transition: "slide",
                                                              beforeposition: function () {
                                                              if(screen!==undefined && screen.lockOrientation!==undefined){
                                                              screen.lockOrientation("portrait");
                                                              }
                                                              setPlaylistTracksPopup(event, function(ret){});
                                                              $(this).css({
                                                                          width: window.innerWidth,
                                                                          height: window.innerHeight
                                                                          });
                                                              },
                                                              x: 0,
                                                              y: 0
                                                              });
                                 
                                 $("#userplaylistpage").popup("open");
                                 }
                                 });
        return true;
        
    } catch (e) {
        return false;
    }
}
function setPlaylistItemDeleteBtn(){
    try{
        playlistOk=true;
        playlistOk=true;
        hidePleaseWait();
        //$("#footerplaylistbtn").removeClass("addplaylist");
        $(".playlistcheckdelete").off("vclick");
        $(".playlistcheckdelete").on("vclick", function(event) {
                                     try{
                                     event.preventDefault();
                                     var id=$(event.currentTarget).attr("id");
                                     var  playlistitemid;
                                     playlistitemid = id.replace("playlistcheck-", "");
                                     deletePlaylistItem(id, playlistitemid);
                                     } catch (e) {
                                     errorHandler("playlistcheckdelete", e);
                                     }
                                     });
        
        return true;
    } catch (e) {
        return false;    }
}
function deletePlaylistItem(id, playlistitemid){
    try{
        if(activeUser.userplaylists!==undefined){
            showPleaseWait();
            mediaInit=true;
            useExistingMedia=false;
            var pl, userplaylistitem;
            var plLiId = "plitemli-" + playlistitemid;
            var idTemps = playlistitemid.split("-");
            var tempId = idTemps[1];
            for (var x = 0; x < currentPlaylist.playlistitems.length; x++) {
                var pli = currentPlaylist.playlistitems[x];
                if (pli.playlistitemid == tempId){
                    currentPlaylist.playlistitems.splice(x,1);
                    $("#" + plLiId).remove();
                    break;
                }else if (pli.playlistitemid===0 && tempId.indexOf("temp") > -1 && pli.tempid==tempId.replace("temp","")){
                    currentPlaylist.playlistitems.splice(x,1);
                    $("#" + plLiId).remove();
                    break;
                }
                
            }
            currentPlaylist.updatepending=true;
            currentPlaylist.audiocount = currentPlaylist.playlistitems.length;
            resetPlaylistItemsOrder();
            $("#" + id).addClass("nodisplay");
            activeUser.saveFilesList(undefined, "userplaylists", true, function() {});
            activeUser.updateUserPlaylist(currentPlaylist, function(ret){
                                          getPlaylistsForUser(true, function(ret){
                                                              setPagePadderDiv("playlistScroller", true, "playlist");
                                                              });
                                          });
            hidePleaseWait();
        }
        
        
    } catch (e) {
        return false;
    }
}
function deletePlaylistItemDownload(id, playlistitemid){
    try{
        if(activeUser.userplaylists!==undefined){
            showPleaseWait();
            mediaInit=false;
            var pl, userplaylistitem;
            var plLiId = "plitemli-" + playlistitemid;
            var idTemps = playlistitemid.split("-");
            var tempId = idTemps[1];
            var categoryRef="";
            var tabid;
            var category;
            var audio ;
            var idsPl;
            var audioId="";
            for (var x = 0; x < currentPlaylist.playlistitems.length; x++) {
                var pli = currentPlaylist.playlistitems[x];
                if (pli.playlistitemid == tempId){
                    pli.isdownloaded= false;
                    categoryRef = pli.categoryref;
                    audioId = pli.audioid + "mp3";
                    if(categoryRef!==undefined && categoryRef.length > 0){
                        idsPl = categoryRef.split("-");
                        tabid = idsPl[0];
                        audiocategoryid = idsPl[1] + "-" + idsPl[2];
                        category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                        if (category !== undefined) {
                            audio = category.getAudioItemById(audioId);
                        }
                    }
                    if (audio != undefined) {
                        pli.fileuri = audio.audiopath;
                    }
                    $(".playlistdownloaditembtn-" + audioId).removeClass("playlistdeleteitem").addClass("downloadaudiobtn");
                    setDownloadAudioBtn();
                    break;
                }else if (pli.playlistitemid===0 && tempId.indexOf("temp") > -1 && pli.tempid==tempId.replace("temp","")){
                    pli.isdownloaded= false;
                    categoryRef = pli.categoryref;
                    audioId = pli.audioid + "mp3";
                    if(categoryRef!==undefined && categoryRef.length > 0){
                        idsPl = categoryRef.split("-");
                        tabid = idsPl[0];
                        audiocategoryid = idsPl[1] + "-" + idsPl[2];
                        category = activeUser.getAudiocategoryById(tabid, audiocategoryid);
                        if (category !== undefined) {
                            audio = category.getAudioItemById(audioId);
                        }
                    }
                    if (audio != undefined) {
                        pli.fileuri = audio.audiopath;
                    }
                    $(".playlistdownloaditembtn-" + audioId).removeClass("playlistdeleteitem").addClass("downloadaudiobtn");
                    setDownloadAudioBtn();
                    break;
                }
                
            }
            hidePleaseWait();
        }
    } catch (e) {
        return false;
    }
}
function playlistTitlePopupOpen() {
    try {
        
        $("#playlisttitleinput").val("");
        $("#playlisttitlepopup").slideDown(600, function() {
                                           setPagePadderDiv("playlistScroller", true, "playlist");
                                           $("#playlisttitleinput").focus();
                                           });
        $("#playilsttitleaddbtn").off("vclick");
        $("#playilsttitleaddbtn").on("vclick", function(event) {
                                     try{
                                     event.preventDefault();
                                     event.stopPropagation();
                                     hideKeyboard(event,false);
                                     playlistOk=true;
                                     currentPlaylist=undefined;
                                     var playlistTitle = $("#playlisttitleinput").val();
                                     var err = "";
                                     
                                     
                                     if (playlistTitle === undefined || playlistTitle.length === 0) {
                                     $(".loginfieldsusername").addClass("missing");
                                     err = resources.missingplaylisttitle;
                                     } else {
                                     $(".loginfieldsusername").removeClass("missing");
                                     }
                                     
                                     if (err.length > 0) {
                                     msgTitle = resources.requiredFields;
                                     msgBtnValue = resources.btnOk;
                                     navigator.notification.confirm(err, function() {
                                                                    hidePleaseWait();
                                                                    }, msgTitle, msgBtnValue);
                                     }else{
                                     if(playlistTitle!==undefined && playlistTitle.length>0){
                                     
                                     if(activeUser.userplaylists!==undefined){
                                     $("#playlisttitlepopup").hide();
                                     $("#playlistitemtitlepopup").hide();
                                     showPleaseWait();
                                     mediaInit=false;
                                     activeUser.addUserPlaylist(playlistTitle, function(ret){
                                                                getPlaylistsForUser(false, function(ret){
                                                                                    setTimeout(function(){
                                                                                               if(currentPlaylist!==undefined){
                                                                                               var pId = currentPlaylist.userplaylistid;
                                                                                               if (pId===0 && currentPlaylist.tempid > 0){
                                                                                               pId = "temp" + currentPlaylist.tempid;
                                                                                               }
                                                                                               $("#playlist-" + pId).trigger("vclick");
                                                                                               }
                                                                                               },1200);
                                                                                    hidePleaseWait();
                                                                                    });
                                                                
                                                                });
                                     }
                                     }
                                     }
                                     return true;
                                     } catch (e) {
                                     errorHandler("playilsttitleaddbtn", e);
                                     }
                                     });
        
        $("#playilsttitlecancelbtn").off("vclick");
        $("#playilsttitlecancelbtn").on("vclick", function(event) {
                                        try{
                                        event.preventDefault();
                                        event.stopPropagation();
                                        playlistOk=true;
                                        hideKeyboard(event, false);
                                        $("#playlisttitleinput").val("");
                                        $("#playlisttitlepopup").hide();
                                        $("#playlistitemtitlepopup").hide();
                                        return true;
                                        } catch (e) {
                                        errorHandler("playilsttitlecancelbtn", e);
                                        }
                                        });
    } catch (e) {
        errorHandler("playlistTitlePopupOpen", e);
    }
}
function resetPlaylistItemsOrder(){
    try{
        
        var listItems = $("#podcategoryul .playlistaudiobtn");
        var listItemId=0;
        if(listItems!==undefined && listItems.length > 0){
            for(var x=0; x < listItems.length; x++){
                var lItem = listItems[x];
                $(lItem).find(".playlistitemno").html((x + 1) + ".   ");
                var playlistItemId = lItem.id.split("-")[2];
                if(playlistItemId!==undefined){
                    if(playlistItemId.indexOf("temp")== -1){listItemId=parseInt(playlistItemId,10);}
                    for(var i=0; i < currentPlaylist.playlistitems.length; i++){
                        var playlistItem =currentPlaylist.playlistitems[i];
                        if(playlistItem.playlistitemid === listItemId){
                            playlistItem.itemorder = x;
                            break;
                        }else if (playlistItem.playlistitemid===0 && playlistItemId.indexOf("temp") > -1 && playlistItem.tempid==playlistItemId.replace("temp","")){
                            playlistItem.itemorder = x;
                            break;
                        }
                    }
                }
            }
        }
        currentPlaylist.updatepending=true;
        activeUser.saveFilesList(undefined, "userplaylists", true, function() {});
        
        return true;
        
    } catch (e) {
        return false;
    }
}
function checkPlaylistUpdates(updateData, returnFunction){
    try{
        
        // Check if any playlists require updating
        if(activeUser.userplaylists!==undefined && activeUser.userplaylists.length>0 && deviceIsOnline===true){
            var pl;
            for (var y=0; y<activeUser.userplaylists.length; y++){
                pl =activeUser.userplaylists[y];
                if(pl.updatepending===true){
                    activeUser.updateUserPlaylist(pl, function(ret){
                                                  if(updateData===true){
                                                  useExistingMedia=false;
                                                  getPlaylistsForUser(false, function(ret){
                                                                      hidePleaseWait();
                                                                      });
                                                  }else{
                                                  hidePleaseWait();
                                                  }
                                                  
                                                  });
                }
            }
        }
        returnFunction(true);
    } catch (e) {
        returnFunction(false);
    }
}
function resetPlaylistButtons(action){
    try{
        activeTab="userplaylist";
        setUserMediaPosition("userplaylist", "", "", "");
        if(action==="addtracks"){
            resetPlaylistItemsOrder();
            currentPlaylist.resetAllDownloaded();
            var plIdTrigger ="#playlist-" + currentPlaylist.userplaylistid;
            $(plIdTrigger).trigger("vclick");
            var newAudioCount =currentPlaylist.audiocount + " " + resources.tracks;
            $(plIdTrigger + " .imagecaptionsub").html(newAudioCount);
            setPlayListAudiosBtn();
        }else if (action==="deletetracks"){
            
        }
        
    } catch (e) {
        return false;
    }
    
}
function setRemoteControlsForPlaylist(category, audio, returnFunction){
    try{
        var params = [remoteArtist, remoteTitle, remoteAlbum, remoteImage, remoteDuration, remoteElapsedTime];
        remoteArtist = audio.artist;
        remoteTitle = audio.tracktitle;
        remoteAlbum = audio.audiotitle;
        var remoteImageToUse ="";
        remoteImage = configs.getCustom("CS_PLAYLIST_ICONFILE");
        if (userPlaylistIconFile!==undefined && userPlaylistIconFile.length > 0){
            remoteImageToUse = userPlaylistIconFile;
        }
        remoteImageToUse = isDeviceOnline===true ? remoteImage : remoteImageToUse;
        remoteElapsedTime = 0;
        remoteDuration = 0;
        for (var x=0; x< category.audios.length; x++){
            var aud=category.audios[x];
            if(aud.audioid===audio.audioid){
                var track=category.audiotracks[x];
                remoteDuration = track.duration;
                break;
            }
        }
        if(device.platform==="Android"|| device.platform==="iOS"){
            try{
                
                params = [remoteArtist, remoteTitle, remoteAlbum, remoteImageToUse, remoteDuration, remoteElapsedTime];
                window.remoteControls.updateMetas(function(success){}, function(fail){}, params);
                
            }catch(e){}
        }
        
        returnFunction(true);
    } catch (e) {
        returnFunction(false);
    }
}
function checkNotesPDFDirExists(dir) {
    try {
        var existingFileName = viewFile;
        dir.getFile(existingFileName, {
                    create: false
                    }, function(fileEntry) {
                    pdfViewFile = fileEntry.toURL();
                    
                    pdfNotesCategory.videonoteurl = fileEntry.toURL();
                    activeUser.saveFilesList(undefined, "videocategories", false, function() {});
                    
                    if (device.platform === "Android"|| device.platform === "iOS") {
                    
                    androidPDFView(pdfViewFile);
                    } else {
                    openWebView(pdfViewFile);
                    }
                    }, function() {
                    var localFileName = viewFile;
                    dir.getFile(localFileName, {
                                create: true,
                                exclusive: false
                                }, function(pdfEntry) {
                                    $("#mloader").remove();
                                var localPath = pdfEntry.toURL();
                                var remoteFile = encodeURI(pdfNotesCategory.videonoteurl);
                                var ft = new FileTransfer();
                                var onSuccess = function(entry) {
                                pdfNotesCategory.videonoteurl = entry.toURL();
                                activeUser.saveFilesList(undefined, "videocategories", false, function() {});
                                if (device.platform === "Android"|| device.platform === "iOS") {
                                androidPDFView(entry.toURL());
                                } else {
                                openWebView(entry.toURL());
                                }
                                };
                                var onError = function(error) {
                                if (error.code == 3) {
                                if (device.platform === "Android"|| device.platform === "iOS") {
                                androidPDFView(localPath);
                                } else {
                                openWebView(localPath);
                                }
                                } else {
                                pdfEntry.remove(function() {}, function(error) {});
                                }
                                };
                                ft.download(remoteFile, localPath, onSuccess, onError);
                                }, function(error) {});
                    });
    } catch (e) {
        errorHandler("checkNotesPDFDirExists", e);
    }
}
function saveFilesListAll(){
    try{
        if(activeUser.audiocategories!==undefined && activeUser.audiocategories.length > 0){ activeUser.saveFilesList(undefined, "audiocategories", true, function() {});}
        if(activeUser.videocategories!==undefined && activeUser.videocategories.length > 0){activeUser.saveFilesList(undefined, "videocategories", true, function() {});}
        if(activeUser.userplaylists!==undefined && activeUser.userplaylists.length > 0){activeUser.saveFilesList(undefined, "userplaylists", true, function() {});}
        if(activeUser.eclasses!==undefined && activeUser.eclasses.length > 0){activeUser.saveFilesList(undefined, "eclasses", true, function() {});}
    } catch (e) {
        errorHandler("saveFilesListAll", e);
    }
}
